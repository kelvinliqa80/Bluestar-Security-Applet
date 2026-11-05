const fs = require('fs');
const { execSync } = require('child_process');

function parsePPM(filePath) {
  const buf = fs.readFileSync(filePath);
  let pos = 0;
  function readWord() {
    while (pos < buf.length && (buf[pos] === 32 || buf[pos] === 10 || buf[pos] === 13 || buf[pos] === 9)) pos++;
    if (pos >= buf.length) return null;
    if (buf[pos] === 35) {
      while (pos < buf.length && buf[pos] !== 10 && buf[pos] !== 13) pos++;
      return readWord();
    }
    const start = pos;
    while (pos < buf.length && buf[pos] !== 32 && buf[pos] !== 10 && buf[pos] !== 13 && buf[pos] !== 9) pos++;
    return buf.toString('ascii', start, pos);
  }
  const magic = readWord();
  if (magic !== 'P6') throw new Error('Expected P6');
  const width = parseInt(readWord(), 10);
  const height = parseInt(readWord(), 10);
  const maxVal = parseInt(readWord(), 10);
  pos++;
  return { width, height, maxVal, data: buf.subarray(pos) };
}

function writePPM(filePath, width, height, maxVal, data) {
  const header = Buffer.from(`P6\n${width} ${height}\n${maxVal}\n`);
  fs.writeFileSync(filePath, Buffer.concat([header, data]));
}

execSync('convert public/assets/aistudio/IMG-20261030-WA9921_3cb74f12.jpg /tmp/input_orig.ppm');
const { width, height, maxVal, data } = parsePPM('/tmp/input_orig.ppm');

function getPixel(x, y) {
  x = Math.max(0, Math.min(width - 1, x));
  y = Math.max(0, Math.min(height - 1, y));
  const idx = (y * width + x) * 3;
  return [data[idx], data[idx + 1], data[idx + 2]];
}

function setPixel(x, y, r, g, b) {
  if (x < 0 || x >= width || y < 0 || y >= height) return;
  const idx = (y * width + x) * 3;
  data[idx] = Math.max(0, Math.min(255, Math.round(r)));
  data[idx + 1] = Math.max(0, Math.min(255, Math.round(g)));
  data[idx + 2] = Math.max(0, Math.min(255, Math.round(b)));
}

// 1. Remove the flagpole and finial ball (x: 398..408, y: 35..226)
// Sample from x: 418..425 at the same y.
for (let y = 35; y <= 226; y++) {
  for (let x = 398; x <= 408; x++) {
    const sampleX = x + 18;
    const [r, g, b] = getPixel(sampleX, y);
    setPixel(x, y, r, g, b);
  }
}

// 2. Identify the flag pixels specifically:
// The flag is bounded by x in [285, 400], y in [65, 225].
// Notice flag colors:
// - Green: g >= 1.08 * r || (g > 100 && g > b + 15)
// - Orange/Red/Yellow: r > 115 && r > g * 1.1
// - Black band: (r + g + b) / 3 < 75
// Outside the flag, sky is pale whitish-blue with very low saturation (r~210, g~225, b~235)
// and tree is dark olive/brown (y > 100 on left side).

const flagMask = new Uint8Array(width * height);
for (let y = 60; y <= 226; y++) {
  for (let x = 282; x <= 402; x++) {
    const [r, g, b] = getPixel(x, y);
    const avg = (r + g + b) / 3;
    const isGreen = (g > 90 && g > r * 1.08 && g > b * 0.95);
    const isOrangeRed = (r > 110 && r > g * 1.15 && r > b * 1.3);
    const isBlackStripe = (avg < 80);
    const isYellow = (r > 130 && g > 130 && b < 100);

    // Also the flag region geometry
    const inFlagBox = (x >= 288 && x <= 400 && y >= 70 && y <= 222);

    if (inFlagBox && (isGreen || isOrangeRed || isBlackStripe || isYellow)) {
      flagMask[y * width + x] = 1;
    }
  }
}

// Dilate flag mask by 3 pixels to capture soft edges
const dilatedMask = new Uint8Array(width * height);
for (let y = 55; y <= 226; y++) {
  for (let x = 280; x <= 405; x++) {
    if (flagMask[y * width + x]) {
      for (let dy = -3; dy <= 3; dy++) {
        for (let dx = -3; dx <= 3; dx++) {
          const ny = y + dy;
          const nx = x + dx;
          if (ny >= 50 && ny <= 226 && nx >= 280 && nx <= 410) {
            dilatedMask[ny * width + nx] = 1;
          }
        }
      }
    }
  }
}

// Inpaint only the dilated flag pixels using Laplace / Dirichlet boundary solver
// First initialize with seamless interpolation from boundary
for (let y = 50; y <= 226; y++) {
  for (let x = 280; x <= 410; x++) {
    if (dilatedMask[y * width + x]) {
      // Find nearest non-masked on left, right, top, bottom
      let lx = x - 1;
      while (lx > 200 && dilatedMask[y * width + lx]) lx--;
      let rx = x + 1;
      while (rx < 450 && dilatedMask[y * width + rx]) rx++;
      let ty = y - 1;
      while (ty > 20 && dilatedMask[ty * width + x]) ty--;
      let by = y + 1;
      while (by < 235 && dilatedMask[by * width + x]) by++;

      const pL = getPixel(lx, y);
      const pR = getPixel(rx, y);
      const pT = getPixel(x, ty);
      const pB = getPixel(x, by);

      const dL = Math.max(1, x - lx);
      const dR = Math.max(1, rx - x);
      const dT = Math.max(1, y - ty);
      const dB = Math.max(1, by - y);

      const wL = 1 / dL;
      const wR = 1 / dR;
      const wT = 1 / dT;
      const wB = 1 / dB;
      const totalW = wL + wR + wT + wB;

      const r = (pL[0] * wL + pR[0] * wR + pT[0] * wT + pB[0] * wB) / totalW;
      const g = (pL[1] * wL + pR[1] * wR + pT[1] * wT + pB[1] * wB) / totalW;
      const b = (pL[2] * wL + pR[2] * wR + pT[2] * wT + pB[2] * wB) / totalW;

      setPixel(x, y, r, g, b);
    }
  }
}

// 60 Gauss-Seidel diffusion iterations for continuous smooth field
for (let iter = 0; iter < 60; iter++) {
  for (let y = 50; y <= 226; y++) {
    for (let x = 280; x <= 410; x++) {
      if (dilatedMask[y * width + x]) {
        const pT = getPixel(x, y - 1);
        const pB = getPixel(x, y + 1);
        const pL = getPixel(x - 1, y);
        const pR = getPixel(x + 1, y);

        const r = (pT[0] + pB[0] + pL[0] + pR[0]) * 0.25;
        const g = (pT[1] + pB[1] + pL[1] + pR[1]) * 0.25;
        const b = (pT[2] + pB[2] + pL[2] + pR[2]) * 0.25;

        setPixel(x, y, r, g, b);
      }
    }
  }
}

// Add very light natural sensor noise matching surrounding sky
for (let y = 50; y <= 226; y++) {
  for (let x = 280; x <= 410; x++) {
    if (dilatedMask[y * width + x]) {
      const noise = (Math.random() - 0.5) * 3;
      const [r, g, b] = getPixel(x, y);
      setPixel(x, y, r + noise, g + noise, b + noise);
    }
  }
}

writePPM('/tmp/output_clean.ppm', width, height, maxVal, data);

execSync('convert /tmp/output_clean.ppm -quality 96 public/k9_dog_handler_clean.jpg');
execSync('cp public/k9_dog_handler_clean.jpg src/assets/images/k9_dog_handler_clean.jpg');
execSync('cp public/k9_dog_handler_clean.jpg public/assets/aistudio/k9_dog_handler_clean.jpg');
execSync('convert public/k9_dog_handler_clean.jpg -crop 500x350+100+0 public/crop_proof.jpg');

console.log('Done pixel-perfect inpainting!');

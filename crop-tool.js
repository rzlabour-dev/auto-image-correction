let isDragging = false;
let startX, startY, endX, endY;

canvas.addEventListener("mousedown", (e) => {
  const rect = canvas.getBoundingClientRect();
  startX = e.clientX - rect.left;
  startY = e.clientY - rect.top;
  isDragging = true;
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const rect = canvas.getBoundingClientRect();
  endX = e.clientX - rect.left;
  endY = e.clientY - rect.top;

  redrawImage();
  drawCropBox();
});

canvas.addEventListener("mouseup", () => {
  isDragging = false;
});

function drawCropBox() {
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.strokeRect(
    startX,
    startY,
    endX - startX,
    endY - startY
  );
}

function redrawImage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

// Passport auto-crop (center 3:4)
function passportAutoCrop() {
  const w = canvas.width;
  const h = canvas.height;
  const cropW = h * 0.75;
  const cropH = h;

  const x = (w - cropW) / 2;
  const y = 0;

  const imageData = ctx.getImageData(x, y, cropW, cropH);
  canvas.width = cropW;
  canvas.height = cropH;
  ctx.putImageData(imageData, 0, 0);
}

let crop = { x: 0, y: 0, w: 0, h: 0 };
let dragging = false;
const ratio = 3 / 4; // passport ratio
const preview = document.getElementById("preview");
const pctx = preview.getContext("2d");

canvas.addEventListener("mousedown", e => {
  const r = canvas.getBoundingClientRect();
  crop.x = e.clientX - r.left;
  crop.y = e.clientY - r.top;
  dragging = true;
});

canvas.addEventListener("mousemove", e => {
  if (!dragging) return;
  const r = canvas.getBoundingClientRect();
  const dx = e.clientX - r.left - crop.x;
  crop.w = dx;
  crop.h = dx / ratio;

  redraw();
  drawCropBox();
  drawPreview();
});

canvas.addEventListener("mouseup", () => dragging = false);

function drawCropBox() {
  ctx.strokeStyle = "#00a3c4";
  ctx.lineWidth = 2;
  ctx.strokeRect(crop.x, crop.y, crop.w, crop.h);
}

function redraw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(img,0,0,canvas.width,canvas.height);
}

function drawPreview() {
  preview.width = 150;
  preview.height = 200;
  pctx.clearRect(0,0,preview.width,preview.height);
  pctx.drawImage(
    canvas,
    crop.x, crop.y, crop.w, crop.h,
    0, 0, preview.width, preview.height
  );
}

function applyCrop() {
  const data = ctx.getImageData(crop.x, crop.y, crop.w, crop.h);
  canvas.width = crop.w;
  canvas.height = crop.h;
  ctx.putImageData(data, 0, 0);
}

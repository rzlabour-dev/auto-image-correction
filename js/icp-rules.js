function drawFaceGuides() {
  redraw();

  ctx.strokeStyle = "rgba(0,163,196,0.7)";
  ctx.lineWidth = 1;

  // Vertical center
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  // Eye level (40%)
  ctx.beginPath();
  ctx.moveTo(0, canvas.height * 0.4);
  ctx.lineTo(canvas.width, canvas.height * 0.4);
  ctx.stroke();

  // Head top & chin zone
  ctx.strokeRect(
    canvas.width * 0.25,
    canvas.height * 0.05,
    canvas.width * 0.5,
    canvas.height * 0.9
  );
}

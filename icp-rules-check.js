function checkICPRules() {
  let results = [];

  // Ratio check
  const ratio = (canvas.width / canvas.height).toFixed(2);
  results.push(ratio == "0.75" ? "✔ Ratio 3:4" : "❌ Ratio not 3:4");

  // Size check
  results.push(
    canvas.width >= 300 && canvas.height >= 400
      ? "✔ Minimum size OK"
      : "❌ Image too small"
  );

  // Background sample (top-left)
  const bg = ctx.getImageData(5, 5, 1, 1).data;
  results.push(
    bg[0] > 230 && bg[1] > 230 && bg[2] > 230
      ? "✔ White background"
      : "❌ Background not white"
  );

  alert("ICP CHECK RESULT:\n\n" + results.join("\n"));
}

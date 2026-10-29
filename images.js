const EMBEDDED_IMAGES = {
  icon: "assets/icon.webp",
  scan: "assets/scan.webp",
  analyze: "assets/analyze.webp",
  results: "assets/results.webp",
  learn: "assets/learn.webp"
};

document.querySelectorAll("[data-image]").forEach((element) => {
  const source = EMBEDDED_IMAGES[element.dataset.image];
  if (source) element.src = source;
});

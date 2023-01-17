const limitedBtn = document.getElementById("limitedBtn");
const unLimitedBtn = document.getElementById("unlimitedBtn");
const output = document.getElementById("output");
// Limited Colors
const colors = [
  "red",
  "black",
  "pink",
  "yellow",
  "white",
  "orange",
  "dodgerblue",
];
limitedBtn.addEventListener("click", () => {
  const colorsVal = Math.floor(Math.random(0, 7) * 7);
  if (colors[colorsVal] === "black") {
    document.body.style.color = "White";
  } else {
    document.body.style.color = "#000";
  }
  document.body.style.backgroundColor = `${colors[colorsVal]}`;
  output.innerHTML = `<h2>Colors: ${colors[colorsVal]}</h2>`;
});

// Unlimted Colors
//  rgba(255,255,255)
unLimitedBtn.addEventListener("click", () => {
  const colorsVal1 = Math.floor(Math.random(0, 255) * 255);
  const colorsVal2 = Math.floor(Math.random(0, 255) * 255);
  const colorsVal3 = Math.floor(Math.random(0, 255) * 255);
  document.body.style.backgroundColor = `rgba(${colorsVal1}, ${colorsVal2}, ${colorsVal3})`;
  output.innerHTML = `<h2>Colors: rgba(${colorsVal1}, ${colorsVal2}, ${colorsVal3})</h2>`;
});

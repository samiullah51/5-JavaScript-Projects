const darkBtn = document.querySelector(".darkBtn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
  darkBtn.classList.toggle("active");
});

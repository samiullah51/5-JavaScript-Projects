const openBtn = document.getElementById("open");
const wrapper = document.querySelector(".wrapper");
const closeBtn = document.getElementById("close");
// Open the modal
openBtn.addEventListener("click", () => {
  wrapper.style.display = "flex";
});

// Close The Modal
closeBtn.addEventListener("click", () => {
  wrapper.style.display = "none";
});

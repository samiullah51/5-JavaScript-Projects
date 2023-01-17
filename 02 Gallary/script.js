const images = document.querySelectorAll(".left img");
const mainImg = document.getElementById("mainImg");
images.forEach((image) => {
  image.addEventListener("click", () => {
    images.forEach((img) => {
      img.classList.remove("active");
    });

    mainImg.src = image.src;
    image.classList.add("active");
  });
});

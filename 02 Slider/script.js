const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const imageEl = document.getElementById("img");
const usernameEl = document.getElementById("username");
const desc = document.getElementById("desc");
const data = [
  {
    img: "./images/1.png",
    title: "Bell",
    desc: "Description for slider 1",
  },
  {
    img: "./images/2.png",
    title: "World Wide Web",
    desc: "Description for slider 2",
  },
  {
    img: "./images/3.png",
    title: "Subscribe Youtube Channel",
    desc: "Description for slider 3",
  },
];

// Onn Window Load

imageEl.src = data[0].img;
usernameEl.innerText = data[0].title;
desc.innerText = data[0].desc;

let index = 0;
// Next
nextBtn.addEventListener("click", () => {
  index += 1;
  if (index == data.length) {
    index = 0;
  }
  imageEl.src = data[index].img;
  usernameEl.innerText = data[index].title;
  desc.innerText = data[index].desc;
});

// Previous
prevBtn.addEventListener("click", () => {
  index -= 1;
  if (index < 0) {
    index = data.length - 1;
  }
  imageEl.src = data[index].img;
  usernameEl.innerText = data[index].title;
  desc.innerText = data[index].desc;
});

// Automatically afte 3 seconds

setInterval(() => {
  index += 1;
  if (index == data.length) {
    index = 0;
  }
  imageEl.src = data[index].img;
  usernameEl.innerText = data[index].title;
  desc.innerText = data[index].desc;
}, 3000);

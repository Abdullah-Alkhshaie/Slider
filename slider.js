const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider = document.querySelector(".slider");
const imge = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slidNumber = 1;
let length = imge.length;

for (let i = 0; i < length; i++) {
  let div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

let buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor = "black";

let buttonBG = function () {
  buttons.forEach((buttons) => {
    buttons.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    buttonBG();
    slider.style.transform = `translateX(-${i * 600}px)`;
    slidNumber = i + 1;
    buttons[i].style.backgroundColor = "black";
  });
});

let nextSlide = function () {
  slider.style.transform = `translateX( -${slidNumber * 600}px)`;
  slidNumber++;
};
let prevSlide = function () {
  slider.style.transform = `translateX( -${(slidNumber - 2) * 600}px)`;
  slidNumber--;
};

let getFirstSlide = function () {
  slider.style.transform = `translateX( 0px)`;
  slidNumber = 1;
};

let getLastSlide = function () {
  slider.style.transform = `translateX( -${(length - 1) * 600}px)`;
  slidNumber = length;
};

let changeColor = function () {
  buttonBG();
  buttons[slidNumber - 1].style.backgroundColor = "black";
};

right.addEventListener("click", () => {
  slidNumber < length ? nextSlide() : getFirstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  slidNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});

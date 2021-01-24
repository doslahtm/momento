const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber + 1}.jpeg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function getRandom() {
  const num = Math.floor(Math.random() * IMG_NUMBER);
  return num;
}

function init() {
  const randomNum = getRandom();
  paintImage(randomNum);
}

init();

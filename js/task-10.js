const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", handleCreate);
destroyButton.addEventListener("click", handleDestroy);

function handleCreate() {
  const amount = input.value;
  createBoxes(amount);
}

function handleDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  const initialBoxSize = 30;
  let boxes = "";

  for (let i = 0; i < amount; i++) {
    const boxSize = initialBoxSize + i * 10;
    const boxColor = getRandomHexColor();
    const box = document.createElement("div");
    box.style.width = box.style.height = `${boxSize}px`;
    box.style.backgroundColor = boxColor;
    boxesContainer.append(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
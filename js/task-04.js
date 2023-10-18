const counterValue = document.querySelector("#value");
let currentValue = 0;

document.querySelector("[data-action='decrement']").addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

document.querySelector("[data-action='increment']").addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
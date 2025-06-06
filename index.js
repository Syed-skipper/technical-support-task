const children = document.querySelectorAll(".child");
const total = document.getElementById("total");


function removeAllOptionSelects() {
  document
    .querySelectorAll(".child .option-select")
    .forEach((el) => el.remove());
}

function appendOptionSelectTo(child) {
  const existing = child.querySelector(".option-select");
  if (!existing) {
    const html = `<div class="option-select">
        <div class="section-header">
          <span>size</span>
          <span>color</span>
        </div>
        <div class="first-section">
          <span>#1</span>
          <select name="size">
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
          <select name="color">
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
        </div>
        <div class="second-section">
          <span>#2</span>
          <select name="size">
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
          <select name="color">
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
        </div>
      </div>`;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const clone = tempDiv.firstElementChild;
    child.querySelector(".sub-child").appendChild(clone);
  }
}

children.forEach((child) => {
  child.addEventListener("click", () => {
    children.forEach((c) => c.classList.remove("active"));
    child.classList.add("active");
    const radio = child.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;

    const discount = child.querySelector(".discount-price");
    if (discount) {
      total.innerText = `Total : ${discount.textContent.trim()}`;
    }
    removeAllOptionSelects();
    appendOptionSelectTo(child);
  });
});

function updateTotalFromActive() {
  const activeChild = document.querySelector(".child.active");
  if (!activeChild) return;

  const priceEle = activeChild.querySelector(".discount-price");
  if (priceEle) {
    const price = priceEle.textContent.trim();
    total.innerHTML = `Total : ${price}`;
  }
  removeAllOptionSelects();
  appendOptionSelectTo(activeChild);
}

window.addEventListener("DOMContentLoaded", updateTotalFromActive);

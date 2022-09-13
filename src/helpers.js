import { headerHTML } from "./html.js";

export function addComponents(elType, className, text) {
  const el = document.createElement(`${elType}`);
  el.classList.add(`${className}`);
  el.innerHTML = `${text}`;
  content.appendChild(el);
}

export function renderHeader() {
  content.innerHTML = "";
  addComponents("div", "header", headerHTML);
}

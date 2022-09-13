import {
  copyContainerHTML,
  content,
  aboutBoltHTML,
  findUsHTML,
} from "./html.js";
import { addComponents, renderHeader } from "./helpers.js";
import { addListeners } from "./index.js";

export function renderHome() {
  document.body.style.backgroundImage = `url("../dist/imgs/bolt.jpeg")`;
  content.innerHTML = "";
  renderHeader();
  addComponents("div", "copy-container", copyContainerHTML);
  addListeners();
}

export function renderAbout() {
  document.body.style.backgroundImage = `url("../dist/imgs/bolt.jpeg")`;
  renderHeader();
  addComponents("div", "about-container", aboutBoltHTML);
  addListeners();
}

export function renderFindUs() {
  document.body.style.backgroundImage = `url("../dist/imgs/party.jpg")`;
  renderHeader();
  addComponents("div", "find-us-container", findUsHTML);
  addListeners();
}

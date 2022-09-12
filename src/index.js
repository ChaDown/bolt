import {
  addComponents,
  headerHTML,
  copyContainerHTML,
  content,
  aboutBoltHTML,
} from "./html.js";
import "./style.css";

//Add Home Page

// window.addEventListener("load", () => {
//   addComponents("div", "header", headerHTML);
//   //   addComponents("div", "copy-container", copyContainerHTML);
//   addComponents("div", "footer", "Copyright ⓒ Bolt 2022");
// });

// document.body.style.backgroundImage = "none";
addComponents("div", "header", headerHTML);
addComponents("div", "about-container", aboutBoltHTML);
addComponents("div", "footer", "Copyright ⓒ Bolt 2022");
// document.body.style.backgroundColor = "rgb(207, 255, 208)";

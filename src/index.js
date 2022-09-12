import {
  addComponents,
  headerHTML,
  copyContainerHTML,
  content,
  aboutBoltHTML,
  findUsHTML,
} from "./html.js";
import "./style.css";

//Add Home Page

// window.addEventListener("load", () => {
//   addComponents("div", "header", headerHTML);
//   //   addComponents("div", "copy-container", copyContainerHTML);
//   addComponents("div", "footer", "Copyright ⓒ Bolt 2022");
// });

document.body.style.backgroundImage = "none";
// addComponents("div", "header", headerHTML);
// addComponents("div", "about-container", aboutBoltHTML);
// addComponents("div", "footer", "Copyright ⓒ Bolt 2022");
document.body.style.backgroundImage =
  "linear-gradient(rgb(228, 255, 245), rgb(95, 248, 95))";

addComponents("div", "header", headerHTML);
addComponents("div", "find-us-container", findUsHTML);
addComponents("div", "footer", "Copyright ⓒ Bolt 2022");

function initMap() {
  //Bolt coordinates
  const boltCoords = {};
}

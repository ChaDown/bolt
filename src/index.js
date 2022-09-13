import {
  headerHTML,
  copyContainerHTML,
  content,
  aboutBoltHTML,
  findUsHTML,
  addComponents,
  renderHeader,
} from "./html.js";
import "./style.css";

const addListeners = function () {
  // To go to Home tab
  const homeNavBtn = document.querySelector(".home");
  const logo = document.querySelector(".logo");
  const goHomeBtns = [homeNavBtn, logo];

  goHomeBtns.forEach((btn) =>
    btn ? btn.addEventListener("click", renderHome) : ""
  );

  // To go to About tab
  const aboutNavBtn = document.querySelector(".about");
  const exploreBtn = document.querySelector(".explore-btn");
  const goAboutBtns = [aboutNavBtn, exploreBtn];

  goAboutBtns.forEach((btn) =>
    btn ? btn.addEventListener("click", renderAbout) : ""
  );

  //To go to Find Us tab
  const findUsNavBtn = document.querySelector(".find-us");
  const clickHereBtn = document.querySelector(".find-us-here");
  const bookNowBtn = document.querySelector(".book-now");

  const findUsBtns = [findUsNavBtn, clickHereBtn, bookNowBtn];

  findUsBtns.forEach((btn) =>
    btn ? btn.addEventListener("click", renderFindUs) : ""
  );
};

function renderHome() {
  document.body.style.backgroundImage = `url("../dist/imgs/bolt.jpeg")`;
  content.innerHTML = "";
  renderHeader();
  addComponents("div", "copy-container", copyContainerHTML);
  addListeners();
}

function renderAbout() {
  document.body.style.backgroundImage = `url("../dist/imgs/bolt.jpeg")`;
  renderHeader();
  addComponents("div", "about-container", aboutBoltHTML);
  addListeners();
}

function renderFindUs() {
  document.body.style.backgroundImage = `url("../dist/imgs/party.jpg")`;
  renderHeader();
  addComponents("div", "find-us-container", findUsHTML);
  addListeners();
}

window.addEventListener("load", renderHome());

import "./style.css";
import { renderHome, renderAbout, renderFindUs } from "./renderFunctions.js";

export const addListeners = function () {
  // Helper function
  function addEvent(arr, renderFunction) {
    arr.forEach((btn) =>
      btn ? btn.addEventListener("click", renderFunction) : ""
    );
  }

  // To go to Home tab
  const homeNavBtn = document.querySelector(".home");
  const logo = document.querySelector(".logo");
  const goHomeBtns = [homeNavBtn, logo];
  addEvent(goHomeBtns, renderHome);

  // To go to About tab
  const aboutNavBtn = document.querySelector(".about");
  const exploreBtn = document.querySelector(".explore-btn");
  const goAboutBtns = [aboutNavBtn, exploreBtn];
  addEvent(goAboutBtns, renderAbout);

  //To go to Find Us tab
  const findUsNavBtn = document.querySelector(".find-us");
  const clickHereBtn = document.querySelector(".find-us-here");
  const bookNowBtn = document.querySelector(".book-now");
  const findUsBtns = [findUsNavBtn, clickHereBtn, bookNowBtn];
  addEvent(findUsBtns, renderFindUs);
};

window.addEventListener("load", renderHome());

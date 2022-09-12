export const content = document.querySelector(".content");

// Add helper functions

function appendContent(element) {
  content.appendChild(`${element}`);
}

export function addComponents(elType, className, text) {
  const el = document.createElement(`${elType}`);
  el.classList.add(`${className}`);
  el.innerHTML = `${text}`;
  content.appendChild(el);
}

// Add the different HTML Content

export const headerHTML = `
<div>BOLT<img class="logo" src="" alt=""></div>
<ul class="nav-btns">
    <li>Home</li>
    <li>About</li>
    <li>Find Us</li>
</ul>
`;

export const copyContainerHTML = `
<div class="copy-modal">Welcome to BOLT! <br> For Kids Who Want to Have Fun, and Parents Who Want to Relax! <br>
<button class="book-btn">Explore BOLT!</button></div>
`;

export const aboutBoltHTML = `

<div class="location grid">
  To find or contact us click &nbsp <button class="find-us">Here!</button>
</div>
<div class="grid layout-container"><img class="layout" src="../dist/imgs/BOLTLayout.jpeg" alt="layout" /></div>
<div class="bolt-info grid">
<br>
<strong>What is BOLT? </strong><br />
  <br>
  BOLT is an inflatable obstacle course, full of exciting challenges and fun
  zones. <br> There's a big jump, balance balls, two slides and much more! Suitable for children 4 and over, we're sure you and your kids will
  love BOLT. There will always be a monitor to ensure all children are safe. <br />
  <br>
  <strong>How does it work?</strong> <br />
  <br>
  It's easy, you can choose 30 minutes or an hour. You drop off your kids, then
  come back when their time's up. Perfect for endless fun for children, and a
  nice little break for parents! There's an abundance of bars and restaurants below us where you can enjoy some precious moments of peace!
</div>
<div class="prices grid">
  <strong>Prices and Opening Hours</strong><br />
  30mins - €6<br />
  1 Hour - €10 <br />Try our birthday group special! Groups of 10+ - €6 for one
  hour. <button class="book-now">Book Now!</button><br />
  Don't forget to pick up a loyalty card. On your third visit, get 1 hour for
  only €6.
</div>
`;

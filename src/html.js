export const content = document.querySelector("#content");

// Add the different HTML Content

export const headerHTML = `
<div><img class="logo" src="imgs/logobolt.jpg" alt="logo"></div>
<ul class="nav-btns">
    <li class="home">Home</li>
    <li class="about">About</li>
    <li class="find-us">Find Us</li>
</ul>
`;

export const copyContainerHTML = `
<div class="copy-modal">Welcome to BOLT! <br> For Kids Who Want to Have Fun, and Parents Who Want to Relax! <br>
<button class="explore-btn">Explore BOLT!</button></div>
`;

export const aboutBoltHTML = `

<div class="location grid">
  To find or contact us click &nbsp <button class="find-us-here">Here!</button>
</div>
<div class="grid layout-container"><img class="layout" src="imgs/BOLTLayout.jpeg" alt="layout" /></div>
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

export const findUsHTML = `<div class="form-container">
<form id="form">
  <div class="form-title">Contact Us</div>
  <label for="name">Name</label>
  <input type="text" id="name" />
  <label for="number">Phone Number</label>
  <input type="number" id="number" />
  <label for="email">Email</label>
  <input type="text" id="email" />
  <div class="q-text">Please let us know your query...</div>
  <textarea
    name="query"
    id="query"
    cols="20"
    rows="5"
    placeholder="I would like to book a party for my son. There will be 15 children, on the 7th of October at 7pm. Is that okay?"
  ></textarea>
  <input class="submit-btn" type="submit" ></input>
</form>
</div>
<div class="address-container">
<div class="map"><iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.8049074285655!2d-0.5638386842844106!3d38.191205595863174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd624d71b7ed5359%3A0xb4754cb4048c39c6!2sBOLT%20Hinchable!5e0!3m2!1sen!2sie!4v1662998487909!5m2!1sen!2sie"
width="500"
height="400"
style="border: 0"
allowfullscreen=""
loading="lazy"
referrerpolicy="no-referrer-when-downgrade"
></iframe></div>
<div class="address"><div class="contact-title">Contact Details</div><br>Come visit BOLT at: <br><br>
Bolt Hinchable, Puerto Maritimo, Santa Pola, Spain 03130. <br> <br> We're on a terrace above Lizzarran restaurant<br><br> Phone Number: 646123456<br><div class="end-logo"><img class="logo" src="imgs/logobolt.jpg" alt="logo"></div></div>
</div>`;

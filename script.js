// for typing effect
var typed = new Typed(".auto-type", {
  strings: ["Web Developer", "Programmer", "Designer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

//for scroll motion
AOS.init({
  duration: 800,
  offset: 100,
});

//click nev bar effect

let containerOne = document.querySelector(".container1");
document.querySelector(".home-btn").addEventListener("click", () => {
  containerOne.scrollIntoView({ behavior: "smooth" });
});

let containerTwo = document.querySelector(".container2");
document.querySelector(".social-link").addEventListener("click", () => {
  containerTwo.scrollIntoView({ behavior: "smooth" });
});

let containerThree = document.querySelector(".container3");
document.querySelector(".skills-btn").addEventListener("click", () => {
  containerThree.scrollIntoView({ behavior: "smooth" });
});

let containerFour = document.querySelector(".container4");
document.querySelector(".contact-btn").addEventListener("click", () => {
  containerFour.scrollIntoView({ behavior: "smooth" });
});

//scrollTopTop
let containerone = document.querySelector(".container1");
document.querySelector(".scroll-img").addEventListener("click", () => {
  containerone.scrollIntoView({ behavior: "smooth" });
});

//Email API
function sendMessage() {
  Email.send({
    SecureToken: "c76f96ba-3cf6-4949-887e-d8e79e7f1fb3",
    To: document.getElementById("email").value,
    From: "khatrishiridhar@gmail.com",
    Subject: "New contact form",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br>Phone number: " +
      document.getElementById("number").value +
      "<br>Email: " +
      document.getElementById("email").value +
      "<br>Message: " +
      document.getElementById("message-area").value,
  }).then((message) => alert(" Message sent successfully"));
}

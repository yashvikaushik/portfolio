import { openChatCaptions } from "./data.js";
const carousel = document.getElementById("openChatCarousel");

const title = document.getElementById("caption-title");

const description = document.getElementById("caption-description");


carousel.addEventListener("slid.bs.carousel", function (event) {
   const current = openChatCaptions[event.to];
   console.log(current);

    title.textContent = current.title;

    description.textContent = current.description;
});

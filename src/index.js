import './style.css';
import { showNextImage, showPrevImage, selectImage } from './chgImage.js';

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const imageNav = document.querySelector(".img-nav-dots");
const imageNavDots = imageNav.querySelectorAll("svg");

prevBtn.addEventListener("click",showPrevImage);
nextBtn.addEventListener("click",showNextImage);

//creating index attribute for image dots
imageNavDots.forEach((dot,index) => {
    dot.addEventListener("click",selectImage);
    dot.classList.add(`index-${index}`);
    dot.setAttribute('data-index',index);
});

setInterval(showNextImage,5000);
import './style.css';
import { showNextImage, showPrevImage } from './chgImage.js';

let currentIndex=0;

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.addEventListener("click",showPrevImage);
nextBtn.addEventListener("click",showNextImage);
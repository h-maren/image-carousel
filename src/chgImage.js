const allImages=document.querySelectorAll(".pic-slide");
const allImagesLength=allImages.length;

let shownImageIndex=0;

allImages.forEach((item,index) => {
    if(!item.classList.contains("hidden")){
        shownImageIndex=index;
    };
});

let showNextImage = (function () {
    console.log(shownImageIndex);
    if(shownImageIndex===(allImagesLength-1)){
        allImages[4].classList.add("hidden");
        allImages[0].classList.remove("hidden");
        shownImageIndex=0;
    } else {
        allImages[shownImageIndex].classList.add("hidden");
        allImages[shownImageIndex+1].classList.remove("hidden");
        shownImageIndex++;
    }
});

let showPrevImage = (function () {
    console.log(shownImageIndex);
    if(shownImageIndex===0){
        allImages[4].classList.remove("hidden");
        allImages[0].classList.add("hidden");
        shownImageIndex=4;
    } else {
        allImages[shownImageIndex].classList.add("hidden");
        allImages[shownImageIndex-1].classList.remove("hidden");
        shownImageIndex--;
    }
});


export { showNextImage, showPrevImage }
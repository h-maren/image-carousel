const allImages=document.querySelectorAll(".pic-slide");
const allImagesLength=allImages.length;
const imageNav = document.querySelector(".img-nav-dots");
const imageNavDots = imageNav.querySelectorAll("svg");

let shownImageIndex=0;



allImages.forEach((item,index) => {
    if(!item.classList.contains("hidden")){
        shownImageIndex=index;
    };
});

let showNextImage = (function () {
    console.log(shownImageIndex);
    if(shownImageIndex===(allImagesLength-1)){
        allImages[allImagesLength-1].classList.add("hidden");
        imageNavDots[allImagesLength-1].classList.remove("selected");
        allImages[0].classList.remove("hidden");
        imageNavDots[0].classList.add("selected");
        shownImageIndex=0;
        allImages
    } else {
        allImages[shownImageIndex].classList.add("hidden");
        imageNavDots[shownImageIndex].classList.remove("selected");
        allImages[shownImageIndex+1].classList.remove("hidden");
        imageNavDots[shownImageIndex+1].classList.add("selected");
        shownImageIndex++;
    }
});

let showPrevImage = (function () {
    console.log(shownImageIndex);
    if(shownImageIndex===0){
        allImages[allImagesLength-1].classList.remove("hidden");
        imageNavDots[allImagesLength-1].classList.add("selected");
        allImages[0].classList.add("hidden");
        imageNavDots[0].classList.remove("selected");
        shownImageIndex=4;
    } else {
        allImages[shownImageIndex].classList.add("hidden");
        imageNavDots[shownImageIndex].classList.remove("selected");
        allImages[shownImageIndex-1].classList.remove("hidden");
        imageNavDots[shownImageIndex-1].classList.add("selected");
        shownImageIndex--;
    }
});

let selectImage = (function (e) {
    console.log(e);
    console.log(e.target);
    let selectedIndex=Number(e.target.dataset.index);
    console.log(selectedIndex);
    allImages.forEach((item,index) => {
        console.log(item);
        console.log(selectedIndex);
        console.log(index);
        console.log(item.classList.contains("hidden"));
        console.log(index===selectedIndex);
        if((item.classList.contains("hidden"))&&(index===selectedIndex)){
            item.classList.remove("hidden");
            e.target.classList.add("selected");
            shownImageIndex=index;
            console.log(shownImageIndex);
        }
        if((!item.classList.contains("hidden"))&&(index!==selectedIndex)){
            item.classList.add("hidden");
            imageNavDots[index].classList.remove("selected");
        }
    });
});


export { showNextImage, showPrevImage, selectImage }
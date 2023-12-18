const nextE1 = document.querySelector(".next");
const prevE1 = document.querySelector(".prev");
const imageContainerE1 = document.querySelector(".image-container");

const imgsE1 = document.querySelectorAll("img");


let currentImage = 1;

let timeout;

nextE1.addEventListener("click", ()=>{
    currentImage++;
    clearTimeout(timeout);
    updateImage();
});

prevE1.addEventListener("click", ()=>{
    currentImage--;
    clearTimeout(timeout);
    updateImage();
});

updateImage();

function updateImage(){
    if(currentImage > imgsE1.length){
        currentImage = 1;
    } else if(currentImage < 1){
        currentImage = imgsE1.length;
    }
    imageContainerE1.style.transform = `translateX(-${(currentImage-1) * 500}px)`

    timeout = setTimeout(()=>{
        currentImage++;
        updateImage();
    }, 3000);
}
const containerE1 = document.querySelector(".container");

//Generate 30 div elements
for (let index = 0; index < 30; index++) {
    const colorContainerE1 = document.createElement("div");
    colorContainerE1.classList.add("color-container");
    containerE1.appendChild(colorContainerE1);
}

const colorContainerE1s = document.querySelectorAll(".color-container");

generateColors();

//Generate 30 colorCodes
function generateColors(){
    colorContainerE1s.forEach((colorContainerE1)=>{
        const newColorcode = randomColor();
        colorContainerE1.style.backgroundColor = "#" +  newColorcode;
        colorContainerE1.innerText = "#" + newColorcode;
    });
}

//Get a random colorCode
function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNumber, randomNumber+1);
    }
    return colorCode;
}
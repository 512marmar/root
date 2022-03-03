let inputWidth = document.querySelector (".inputwidth");
let inputHeight = document.querySelector (".inputheight");
let inputColor = document.querySelector (".inputcolor");
let btnCreate = document.querySelector (".input_create");


let newDiv;

let iwValue;
let ihValue;;
let icValue;

let isDiv = false;

function createDiv() {
    if (!isDiv) {
        iwValue = inputWidth.value;
        ihValue = inputHeight.vaule;
        icValue = inputColor.vaule;

    if (iwValue >= 50 && ihValue >= 50 && iwValue <= 500 && ihValue <= 500) {
        newDiv = document.createElement("div");
        newDiv.style.width = iwValue + "px";
        newDiv.style.height = ihValue + "px";
        newDiv.style.background = icValue
        
    
        document.querySelector("containet").prepend(newDiv);
        inputHeight.setAttribute("readonly", 1);
        inputWidth.setAttribute ("readopnly", 1);
        
        isDiv - true
    }   
    }
}

            /* Const selectors */

const boxes = document.querySelectorAll(".color");
const pressHere = document.getElementById("presshere")
const blackSelect = document.getElementById("black-select");
const redSelect = document.getElementById("red-select");
const blueSelect = document.getElementById("blue-select");
const greenSelect = document.getElementById("green-select");
const yellowSelect = document.getElementById("yellow-select");
const orangeSelect = document.getElementById("orange-select");
const purpleSelect = document.getElementById("purple-select");
const brownSelect = document.getElementById("brown-select");
const pinkSelect = document.getElementById("pink-select");
const greySelect = document.getElementById("grey-select");



let currentColor = "black";


            /* Functions */

// Space bar to clear color class.
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        boxes.forEach(box => { 
            box.className = "border"
        }) 
    }
}


            /* Event Listeners */

// Mouse over to change box class.
boxes.forEach(box => box.addEventListener("mouseover", function() {
    box.className = "";
    box.classList.add(currentColor);
    
}));

// Click Press Here button to clear boxes class.
pressHere.addEventListener("click", function() {
    console.log("press here");
    boxes.forEach(box => {
        box.className = "border";
    })  
});

// Events for colour change.
blackSelect.addEventListener("click", function(){
    currentColor = "black";
});

redSelect.addEventListener("click", function(){
    currentColor = "red";
});

blueSelect.addEventListener("click", function(){
    currentColor = "blue";
});

greenSelect.addEventListener("click", function(){
    currentColor = "green";
});

yellowSelect.addEventListener("click", function(){
    currentColor = "yellow";
});

orangeSelect.addEventListener("click", function(){
    currentColor = "orange";
});

purpleSelect.addEventListener("click", function(){
    currentColor = "purple";
});

brownSelect.addEventListener("click", function(){
    currentColor = "brown";
});

pinkSelect.addEventListener("click", function(){
    currentColor = "pink";
});

greySelect.addEventListener("click", function(){
    currentColor = "grey";
});






            /* Colour Changing */

var colorChanger = document.getElementById("colour-changer");


const randNum = () => Math.floor(Math.random()*256);

function changeColor(){
  colorChanger.style.backgroundColor =  `rgb(${randNum()},${randNum()},${randNum()})`;
  var colorCode = `rgb(${randNum()},${randNum()},${randNum()})`;

  console.log(colorCode);
  return colorCode;
}

var myTimer = setInterval(changeColor, 500);
var running = true;




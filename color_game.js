let squares = document.getElementsByClassName('square');
let colorDisplay = document.getElementById('color-display');
let result = document.getElementById('result');
let header = document.getElementById('header');
let playAgain = document.getElementById('play-again');
let newColor = document.getElementById('new-color');
let colors = [];

generateColor();
console.log(colors);
function generateColor() {
    let i;
    for(i=0;i<squares.length;i++) {
        colors.push(
            `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        );
    }
}
assignColor();
function assignColor() {
    let i;
for(i=0;i<squares.length;i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].setAttribute("data-color", colors[i]);
}
}    
let pickedColor = getRandomColor();
function getRandomColor() {
    let randomColor = colors[Math.floor(Math.random()*squares.length)];
    colorDisplay.innerText = randomColor;
    return randomColor;
}
checkColor();
function checkColor() {
    let i,j;
    for(i=0;i<squares.length;i++) {
        squares[i].onclick = function(){
         let getColor = this.getAttribute("data-color");
         if(getColor == pickedColor) {
            for(j=0;j<squares.length;j++) {
                squares[j].style.opacity = "1";
                squares[j].style.backgroundColor = pickedColor;
            }
            playAgain.innerText = "Play Again";
            header.style.background = pickedColor;
            result.innerText = "Correct";
         } else {
            result.innerText = "Try More!!";
            this.classList.add("fade");
         }
        }
    }
}

newColor.onclick = function() {
    reset();
}
playAgain.onclick = function() {
    reset();
}
function reset() {
    window.location = location.href;
}
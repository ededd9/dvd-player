const section = document.querySelector('section');
const logo = document.querySelector('.logo');
section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth + 'px';
//Velocity variables for DVD logo

let xPosition = 10;
let yPosition = 10;
let xSpeed = 4;
let ySpeed = 4;

function update(){
    logo.style.left = xPosition + 'px';
    logo.style.top = yPosition + 'px';
}

setInterval(() =>{
    if(xPosition+logo.clientWidth >= window.innerWidth || xPosition <= 0){
        xSpeed = -xSpeed;
        changeColor()
    }
    if(yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0){
        ySpeed = -ySpeed;
        changeColor()
    }
    xPosition += xSpeed;
    yPosition += ySpeed;
    update();
},20)

function changeColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    logo.style.fill = '#' + randomColor;
}

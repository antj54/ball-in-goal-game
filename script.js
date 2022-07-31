// Defining ball variable and function to launch and retrieve ball
let ball = document.getElementById('ball');
let resetButton = document.getElementById('reset'); 

function up() {
    ball.style.bottom = '910px';  
}

function down() {
    ball.style.bottom = "0px";
    
  }

document.addEventListener('keypress', up);
resetButton.addEventListener("mousedown", down);
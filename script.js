// Add keypress event listener to play button
let playButton = document.getElementById('play');

function play() {
  document.addEventListener('keypress', up);
  down();
}

playButton.addEventListener('mousedown', play);

// Defining ball variable and function to launch and retrieve ball
let ball = document.getElementById('ball');
let resetButton = document.getElementById('reset'); 

function up() {
    ball.style.bottom = '910px';  
}

document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    console.log('Space pressed')
  }
})

function down() {
    ball.style.bottom = "0px";
    
  }


resetButton.addEventListener("mousedown", down);
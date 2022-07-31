// Add event listener to play button
let playButton = document.getElementById('play');

function play() {
  document.addEventListener('keypress', up);
  down();
  playButton.removeEventListener('mousedown', play );
  playButton.style.cursor = 'default';
}

playButton.addEventListener('mousedown', play);


// Defining ball variable and function to launch and retrieve ball
let ball = document.getElementById('ball');
let resetButton = document.getElementById('reset'); 

function up() {
document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    ball.style.bottom = '910px';
  }
})
resetButton.addEventListener("mousedown", down);
}

function down() {
    ball.style.bottom = "0px";
    
  }

resetButton.addEventListener("mousedown", down);
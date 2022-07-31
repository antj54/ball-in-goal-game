// Add event listener to play button
let playButton = document.getElementById('play');

function play() {
  document.addEventListener('keydown', up); //executes up()
  down();
  playButton.removeEventListener('mousedown', play ); //remove play button function on execution
  playButton.style.cursor = 'default';
};

playButton.addEventListener('mousedown', play);


// Defining ball variable and function to launch and retrieve ball
let ball = document.getElementById('ball');
let resetButton = document.getElementById('reset'); 

function up() {
document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    ball.style.bottom = '910px';
  }
});
resetButton.addEventListener("mousedown", down); //add reset button function on up()
};

function down() {
    ball.style.bottom = "0px";

};


//Setting arrow key functionality
let projectile = document.getElementById('projectile');
let moveBy = 10;


window.addEventListener('load', () => {
  projectile.style.position = 'relative';
  projectile.style.left = 0;
});

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      projectile.style.left = parseInt(projectile.style.left) - moveBy + 'px';
      break;
    case 'ArrowRight': 
      projectile.style.left = parseInt(projectile.style.left) + moveBy + 'px';
      break;
  }
})






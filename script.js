//How to play window
let howTo = document.getElementById('how-to');
let helpWindow = document.getElementById('help');
let closeButton = document.getElementById('close');

function getHelp() {
  helpWindow.style.display = 'block';
  console.log('help')
};

howTo.addEventListener('click', getHelp)

function closeHelp() {
  helpWindow.style.display = 'none';
};

closeButton.addEventListener('click', closeHelp);


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


});


//Set left and right limits to projectile
let field = document.getElementById('field');
let brE = projectile.getBoundingClientRect();
let brC = field.getBoundingClientRect();

//logs x and y coordinates to console
function logCoordinates() {
  let x = projectile.getBoundingClientRect();
  console.log(x);
  console.log(brC)
};

window.addEventListener('keydown', logCoordinates)

//alerts when left and right limits reached, keeps projectile in bounds 
function findContainment() {
  let left = projectile.getBoundingClientRect();
  if ((left.left <= brC.left)) {
    alert('Out of bounds!');
    projectile.style.left = '100px';
  }
 else if ((left.right >= brC.right)) {
   alert('Out of bounds!');
   projectile.style.left = '100px';
 }
};

window.addEventListener('keydown', findContainment);//runs every time a key is pressed

window.onresize = function(){ location.reload(); }//refresh window on resize




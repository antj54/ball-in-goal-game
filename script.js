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

playButton.addEventListener('mousedown', play); // can trigger play with button click or enter key
document.addEventListener('keypress', event => {
  if (event.code === 'Enter') {
    play()
  }
})

// Defining ball variable and function to launch and retrieve ball
let ball = document.getElementById('ball');
let resetButton = document.getElementById('reset'); 

function up() {
document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    ball.style.bottom = '911px';
  }
});
resetButton.addEventListener("mousedown", down); //add reset button function on up()
};

function down() {
    ball.style.bottom = "0px";

};



//Setting arrow key functionality
let projectile = document.getElementById('projectile');
let moveBy = 7;


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

//Make goal move randomly left or right each round
let goal = document.getElementById('goal');
let goalCoordinates = goal.getBoundingClientRect();
let fieldWidth = brC.width

function randomSpot() {
  let spot = Math.floor(Math.random() * (fieldWidth - 170));
  console.log(goalCoordinates)
  console.log(spot);
  goal.style.left = (spot + 'px');
  if (spot >= fieldWidth) {
    goal.style.right = '160px'
  }
  
};

resetButton.addEventListener('mousedown', randomSpot)

//Detect when ball goes in goal
let ballCoordinates = ball.getBoundingClientRect();
let goalMiddle = document.querySelector('.component-middle');
let goalDetect = goalMiddle.getBoundingClientRect();
let scoreCount = document.getElementById('score');

let celebrate = document.getElementById('celebration');
let goalCele = document.createElement('h1');
goalCele.id = 'Cele';
goalCele.innerHTML = 'GOAL!!!'

function updateBallCoordinates() {
  let newBallCoordinates = ball.getBoundingClientRect();
  let newGoalCoordinates = goalMiddle.getBoundingClientRect();
  if (newBallCoordinates.top <= newGoalCoordinates.bottom && 
      newBallCoordinates.left > newGoalCoordinates.left && 
      newBallCoordinates.right < newGoalCoordinates.right) {
        console.log("GOAL");
        celebrate.appendChild(goalCele); //adds goal celebration
        return true;
      } else {
        celebrate.removeChild(goalCele);
      }

};

window.setInterval(updateBallCoordinates, 100); //updates ball coordinates every 1/10 second


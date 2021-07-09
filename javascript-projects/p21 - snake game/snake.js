const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');

// create the unit 
const box = 32;

// load images
const ground = new Image();
ground.src = 'img/ground.png';

const foodImg = new Image();
foodImg.src = 'img/food.png';

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = 'audio/audio_dead.mp3';
eat.src = 'audio/audio_eat.mp3';
up.src = 'audio/audio_up.mp3';
right.src = 'audio/audio_right.mp3';
left.src = 'audio/audio_left.mp3';
down.src = 'audio/audio_down.mp3';

// create snake

let snake = [];

snake[0] = {
   x: 9 * box,
   y: 10 * box
}

let food = {
   x: Math.floor(Math.random() * 17 + 1) * box,
   y: Math.floor(Math.random() * 15 + 3) * box
}

// create the score var 
let score = 0;

// control the snake 
let d;
document.addEventListener('keydown', direction);

function direction(e) {

   if (e.keyCode == 37 && d != 'RIGHT') {
      left.play();
      d = 'LEFT';

   } else if (e.keyCode == 38 && d != 'DOWN') {
      up.play();
      d = 'UP';

   } else if (e.keyCode == 39 && d != 'LEFT') {
      right.play();
      d = 'RIGHT';

   } else if (e.keyCode == 40 && d != 'UP') {
      right.play();
      d = 'DOWN';

   }

}

// cheack collision function
function collision(head, array) {
   for (let i = 0; i < array.length; i++) {
      if (head.x == array[i].x && head.y == array[i].y) {
         return true;
      }
   }
   return false;
}

// draw everything to the canvas

function draw() {
   ctx.drawImage(ground, 0, 0);

   for (let i = 0; i < snake.length; i++) {
      ctx.fillStyle = (i == 0) ? 'green' : 'white';
      ctx.fillRect(snake[i].x, snake[i].y, box, box);

      ctx.strokeStyle = 'red';
      ctx.strokeRect(snake[i].x, snake[i].y, box, box);
   }

   ctx.drawImage(foodImg, food.x, food.y);
   // old head position
   let snakeX = snake[0].x;
   let snakeY = snake[0].y;

   // which direction 
   if (d == 'LEFT') { snakeX -= box };
   if (d == 'UP') { snakeY -= box };
   if (d == 'RIGHT') { snakeX += box };
   if (d == 'DOWN') { snakeY += box };

   // IF THE SNAKE eats the food
   if (snakeX == food.x && snakeY == food.y) {
      score++;
      eat.play();

      food = {
         x: Math.floor(Math.random() * 17 + 1) * box,
         y: Math.floor(Math.random() * 15 + 3) * box
      }
   } else {
      // remove the tail
      snake.pop();
   }


   // add new Head
   let newHead = {
      x: snakeX,
      y: snakeY
   }

   // game over

   if (snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collision(newHead, snake)) {
      clearInterval(game);
      dead.play();
   }

   snake.unshift(newHead);


   ctx.fillStyle = 'white';
   ctx.font = '45px Changa one';
   ctx.fillText(score, 2.6 * box, 1.7 * box);
   
}

let game = setInterval(draw, 100);
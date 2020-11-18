var character = document.querySelector(".character");
var map = document.querySelector(".map");

//position of mouse on the map at start, and changes as player moves
var x = 52;
var y = 50;
var held_directions = []; //State of which arrow keys we are holding down
var speed = 0.5; //How fast the character moves in pixels per frame

const placeCharacter = () => {
  var pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--pixel-size")
  );

  const held_direction = held_directions[0];
  if (held_direction) {
    if (held_direction === directions.right) {
      x += speed;
    }
    if (held_direction === directions.left) {
      x -= speed;
    }
    if (held_direction === directions.down) {
      y += speed;
    }
    if (held_direction === directions.up) {
      y -= speed;
    }
    character.setAttribute("facing", held_direction);
  }
  character.setAttribute("walking", held_direction ? "true" : "false");

  //Limits (gives the illusion of walls)
  var leftLimit = -10;
  var rightLimit = 16 * 11 + 10;
  var topLimit = -10 + 16;
  var bottomLimit = 16 * 8;
  if (x < leftLimit) {
    x = leftLimit;
  }
  if (x > rightLimit) {
    x = rightLimit;
  }
  if (y < topLimit) {
    y = topLimit;
  }
  if (y > bottomLimit) {
    y = bottomLimit;
  }

  //Centers the mouse in the map
  var camera_left = pixelSize * 66;
  var camera_top = pixelSize * 82;

  map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${
    -y * pixelSize + camera_top
  }px, 0 )`;
  character.style.transform = `translate3d( ${x * pixelSize}px, ${
    y * pixelSize
  }px, 0 )`;
};

//Set up the game loop
const step = () => {
  placeCharacter();
  window.requestAnimationFrame(() => {
    step();
  });
};
step(); //kick off the first step!

/* Direction key state */
const directions = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};
const keys = {
  38: directions.up,
  37: directions.left,
  39: directions.right,
  40: directions.down,
};
document.addEventListener("keydown", (e) => {
  var dir = keys[e.which];
  if (dir && held_directions.indexOf(dir) === -1) {
    held_directions.unshift(dir);
  }
});

document.addEventListener("keyup", (e) => {
  var dir = keys[e.which];
  var index = held_directions.indexOf(dir);
  if (index > -1) {
    held_directions.splice(index, 1);
  }
});

//array of books
var books = [
  "In Search of Lost Time",
  "Ulysses",
  "Don Quixote",
  "The Great Gatsby",
  "One Hundred Years of Solitude",
  "Moby Dick",
  "War and Peace",
  "Hamlet",
  "The Catcher in the Rye",
  "The Odyssey",
  "Crime and Punishment",
  "Madame Bovary",
  "The Divine Comedy",
  "The Adventures of Huckleberry Finn",
  "Alices in Wonderland",
  "Pride and Prejudice",
  "Wuthering Heights",
  "To the Lighthouse",
  "Catch-22",
  "The Sound and the Fury",
  "The Illiad",
  "Heart of Darkness",
  "The Grapes of Wrath",
  "Invisible Man",
  "To Kill a Mockingbird",
  "The Lord of the Rings",
];

// document.querySelector(".books").style.height  = '204px';
// document.querySelector(".books.one").style.width  = '28px';
// document.querySelector(".books.two").style.width  = '29px';
// document.querySelector(".books.three").style.width  = '26px';
// document.querySelector(".books.four").style.width  = '29px';
// document.querySelector(".books.five").style.width  = '26px';
// document.querySelector(".books.six").style.width  = '40px';
// document.querySelector(".books.seven").style.width  = '28px';
// document.querySelector(".books.eight").style.width  = '27px';
// document.querySelector(".books.nine").style.width  = '29px';
// document.querySelector(".books.ten").style.width  = '28px';
// document.querySelector(".books.eleven").style.width  = '28px';
// document.querySelector(".books.twelve").style.width  = '29px';
// document.querySelector(".books.thirteen").style.width  = '42px';

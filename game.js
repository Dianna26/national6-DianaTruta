console.log("OOP Game Homework");

class GameObject {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = 0;
    this.y = 0;
    this.generateRef();
  }

  generateRef() {
    this.ref = document.createElement("div");
    this.ref.style.width = `${this.width}px`;
    this.ref.style.height = `${this.height}px`;
    this.ref.style.position = "absolute";
    this.ref.style.top = 0;
    this.ref.style.left = 0;

    document.getElementById("game-scene").appendChild(this.ref);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
    this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  removeRef() {
    this.ref.remove();
  }
}
class Player extends GameObject {
  constructor() {
    super();
    this.ref.style.background = "blue";

    this.move(50, 225);
  }

  moveUp() {
  
    if (this.y - 25 >= 0) this.move(this.x, this.y - 25);
  }

  moveDown() {
    if (this.y + 25 <= 500 - this.height) this.move(this.x, this.y + 25);
  }
}

class Obstacle extends GameObject {
  constructor() {
    super();
    this.ref.style.background = "red";
    this.move(1060, 25);
  }

  moveLeft() {
    this.move(this.x - 5, this.y);
  }
}

class ObstacleFactory {
  constructor() {
    this.obstacles = [];
  }

 
  createObstacle() {
    const obstacle = new Obstacle();
    obstacle.move(1060, Math.floor(Math.random() * 450));
    this.obstacles.push(obstacle);
  }


  destroyObstacles() {
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.x < -50) {
 
        obstacle.removeRef();
        return false;
      }

      return true;
    });
  }
 
  moveObstacles() {
    for (const obstacle of this.obstacles) {
      obstacle.moveLeft();
    }
  }
}



let keyUpPress = false;
let keyDownPress = false;


document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = true;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = false;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = false;
  }
});


function collisionDetection(player, obstacles) {
  for (const obstacle of obstacles) {
    // console.log(player.x, obstacle.x);

    // if (
    //   (player.x <= obstacle.x &&
    //     obstacle.x <= player.x + player.width &&
    //     player.y <= obstacle.y &&
    //     obstacle.y <= player.y + player.height) ||
    //   (player.x <= obstacle.x + obstacle.width &&
    //     obstacle.x + obstacle.width <= player.x + player.width &&
    //     player.y <= obstacle.y + obstacle.height &&
    //     obstacle.y + obstacle.height <= player.y + player.height)
    // )

    if (player.x < obstacle.x + obstacle.width &&
      player.x + player.width > obstacle.x &&
      player.y < obstacle.y + obstacle.height &&
      player.y + player.height > obstacle.y
      ){
        return true;
      }
  }

  return false;
}


const player = new Player();
const obstacleFactory = new ObstacleFactory();


let count = 0;


var LivesArray = ["heart.png", "heart.png","heart.png"];
let i;
let nrOfLives;
class Lives {
  constructor() {
    this.refs = [];
    this.generateLife();
    nrOfLives = 3;
    this.life = true;
  }

  generateLife() {
    for (var i = 0; i < LivesArray.length; i++) {
      this.ref = document.createElement("img");
      this.ref.setAttribute("id", "heart-" + i);
      this.ref.src = LivesArray[i] ;
      this.ref.classList.add("lives");
      document.body.appendChild(this.ref);
      console.log(this.ref);
      this.refs.push(this.ref);
      console.log(this.refs);
    };
}

  decreaseLife() {
    if (collisionDetection(player, obstacleFactory.obstacles)) {
      if (this.refs.length > 0 && this.life === true){
        this.refs[this.refs.length - 1].remove();
        this.refs.pop();
        nrOfLives --;
        this.life = false;
        setTimeout( () => {this.life = true}, 2000);
      }
      if (this.refs.length === 0){
        alert('GAME OVER');
      }
    }
   
  }
}  

var lives = new Lives();

console.log(lives);

let gameLoop = setInterval(() => {
  console.log(keyUpPress);

  
  if (keyUpPress) player.moveUp();
  if (keyDownPress) player.moveDown();

 
  if (count % 10 === 0) obstacleFactory.createObstacle();

  
  obstacleFactory.moveObstacles();


  // if (collisionDetection(player, obstacleFactory.obstacles)) {
  //   clearInterval(gameLoop);
  //   alert("You hit an obstacle");
  //   window.location = "/";
  // }c

  lives.decreaseLife();

  obstacleFactory.destroyObstacles();

  count++;
}, 50);

// var LivesArray = ["heart.png", "heart.png","heart.png"];
// let i;
// let nrOfLives;
// class Lives {
//   constructor() {
//     this.refs = [];
//     this.generateLife();
//     nrOfLives = 3;
//   }

//   generateLife() {
//     for (var i = 0; i < LivesArray.length; i++) {
//       this.ref = document.createElement("img");
//       this.ref.setAttribute("id", "heart-" + i);
//       this.ref.src = LivesArray[i] ;
//       this.ref.classList.add("lives");
//       document.body.appendChild(this.ref);
//       console.log(this.ref);
//       this.refs.push(this.ref);
//       console.log(this.refs);
//     };
// }

//   decreaseLife() {
//     if (collisionDetection(player, obstacleFactory.obstacles)) {
//       console.log("Lalala");
//       this.refs[this.refs.length - 1].remove();
//       this.refs.pop();
//       console.log(this.refs);
//       nrOfLives --;
//     }
   
//   }
// }  

// var lives = new Lives();

// console.log(lives);
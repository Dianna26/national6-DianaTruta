console.log("Spaceship Generator");

class Spaceship {
    constructor() {
    this.positionX = 0;
    this.positionY = 0;
    this.runningEngine = false;
    this.generateHtmlRef();
    this.setStartEngine();
    this.setMoveSpaceship();
    }

    generateHtmlRef() {
        let spaceshipArray = ["blue-spaceship.png", "green-spaceship.png", "red-spaceship.png"];
        this.ref = document.createElement("img");
        this.ref.style.position = "absolute";
        this.ref.src = spaceshipArray[this.getRndInteger(0, 3)];
        this.ref.setAttribute('width', '80px');
        this.ref.setAttribute('height', '80px');
        this.ref.classList.add("spaceships");
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(this.ref);
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    
    setStartEngine() {
        this.ref.addEventListener("click", () => {
          this.startEngine();
        });

        this.ref.addEventListener("dblclick", () => {
            this.runningEngine = false;
        })

    }

      startEngine() {
        if (!this.runningEngine) {
          this.runningEngine = true;
          console.log("Engine is starting");
          this.ref.classList.add("spaceship--start");
        }
      }

    setMoveSpaceship() {
        document.addEventListener("keydown", (event) => {
            if (this.runningEngine) {
                this.moveSpaceship(event.key);
            }
        });
    }

    moveSpaceship(direction) {
        console.log(this.positionX + ' : ' + this.positionX);
        if (direction === "ArrowRight") {
          this.positionX += 5;
          this.ref.style.transform = `translate(${this.positionX}px, ${this.positionY}px)`;
        } else if (direction === "ArrowLeft") {
            this.positionX -= 5;
            this.ref.style.transform = `translate(${this.positionX}px, ${this.positionY}px)`;
        } else if (direction === "ArrowUp") {
            this.positionY -= 5;
          this.ref.style.transform = `translate(${this.positionX}px, ${this.positionY}px)`;
          } else if (direction === "ArrowDown") {
            this.positionY += 5;
          this.ref.style.transform = `translate(${this.positionX}px, ${this.positionY}px)`;
          }

    }
    


}
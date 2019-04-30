class Game {

}

class Box {
    constructor(_xpos, _ypos, _xstep, _ystep, _id) {
        this.xpos = _xpos;
        this.ypos = _ypos;
        this.xstep = _xstep;
        this.ystep = _ystep;
        this.elem = document.getElementById(_id);
        this.height = "40px";
        this.width = "100px";
    }
    remove() {
        let container = document.getElementById("container");
        container.removeChild(this.elem);
    }

    render() {
        this.elem.style.top = this.ypos + "px";
        this.elem.style.left = this.xpos + "px";
    }

}

class Player {
    constructor(_cont, _xpos, _ypos, _height, _width) {
        this.container = _cont;
        this.elem = document.getElementById("player");
        this.xpos = _xpos;
        this.ypos = _ypos;
        this.height = _height;
        this.width = _width;
    }

    move(event) {
        this.xpos =
            event.clientX -
            this.container.getBoundingClientRect().left -
            this.elem.clientWidth / 2;

        this.render();
    }

    render() {
        this.elem.style.left = this.xpos + "px";
        // render anything else you would like.
    }
}



class Healthbar {
    constructor() {
        this.elem = document.getElementById("healthbar");
        this.health = 100;
        this.elem.min = 0;
        this.elem.max = 100;
        this.elem.value = this.health;
    }

    updateHealth(value) {
        this.health = this.health + value;
        this.elem.value = this.health;
    }
}

// Some variables that we need below
var boxes = [];
var numBoxes = Math.ceil(Math.random() * 1);
var container = document.getElementById("container");
let goodWords = [
  "smallanimals",
  "batteries",
  "greenlights",
  "sleep",
  "icecream",
  "chickens",
  "smallplants",
  "payraise",
  "music",
  "art"
];
let badWords = [
  "anxiety",
  "depression",
  "taxes",
  "dictators",
  "eyebrowmites",
  "misspelleddwords",
  "moist",
  "tourists",
  "sneezing",
  "dirtydishes",
  "wetsocks",
  "weakhandshakes",
  "overexplaining",
  "studentdebt",
  "sweat"
];
let allWords = [
  "anxiety",
  "depression",
  "taxes",
  "dictators",
  "eyebrowmites",
  "misspelleddwords",
  "moist",
  "tourists",
  "sneezing",
  "dirtydishes",
  "wetsocks",
  "weakhandshakes",
  "overexplaining",
  "studentdebt",
  "sweat",
  "smallanimals",
  "batteries",
  "greenlights",
  "sleep",
  "icecream",
  "chickens",
  "smallplants",
  "payraise",
  "music",
  "art"
];

// Dynamically create the boxes
for (var i = 0; i < numBoxes; i++) {
    let animatedDiv = document.createElement("div");
    //create a text element
    let textContent = document.createElement("P");
    animatedDiv.className = "box";
    animatedDiv.id = "box" + i;
    //randomly choose a word from the array to reference the class to give to the text element
    textContent.className = allWords[Math.floor(Math.random() * 25)];
    container.appendChild(animatedDiv);
    //append the text content to the animated div
    animatedDiv.appendChild(textContent);
    //creating a new object to push into boxes array with specific attributes
    boxes[i] = new Box(
        Math.random() * 350,
        0,
        0,
        Math.random() + 5,
        animatedDiv.id
    );
}


//sets animation frame
var id = setInterval(frame, 5);

// The animation code
function frame() {
    // Box 1
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].ypos > 365) {
            boxes[i].remove();
            boxes.splice(i, 1);

        } else if (boxes[i].ypos < 0) {
            boxes[i].ystep = -boxes[i].ystep;
        }
        //supposed to be the collision algorithm
        for (var l = 0; l < boxes.length; l++) {
            if (
                boxes[i].xpos < player.xpos + player.width &&
                boxes[i].xpos + boxes[i].width > player.xpos &&
                boxes[i].ypos < player.ypos + player.height &&
                boxes[i].ypos + boxes[i].height > player.ypos
            ) {
                // collision detected!
                document.write("collision!");
            }
        }
        boxes[i].ypos = boxes[i].ypos + boxes[i].ystep;
        boxes[i].render();
    }
}


let player = new Player(container, 255, 350, 50, 50);
container.addEventListener("click", event => {
    player.move(event);
});
//let myApp = new GameOfLife();
let hb = new Healthbar();

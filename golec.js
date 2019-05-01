class Game {
    constructor() {
        this.elem = document.getElementById("healthbar");
        this.health = 100;
        this.elem.min = 0;
        this.elem.max = 100;
        this.elem.value = this.health;
        this.boxes = [];
        this.boxesNum = Math.ceil(Math.random() * 4) + 3;
        this.container = document.getElementById("container");
        this.allWords = [
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
        this.player = new Player(container, 255, 350, 50, 50);
    }

    updateHealth(value) {
        this.health = this.health + value;
        this.elem.value = this.health;
    }

    // Some variables that we need below


    play() {
        const that = this;
        let containerId = document.getElementById("container");
        for (var i = 0; i < that.boxesNum; i++) {
            // create box
            let box = new Box(Math.random() * 350, 0, 0, (Math.random() * 1.5), "box" + i, containerId);
            that.boxes.push(box);
        }
        let id = setInterval(function () {
                for (var i = 0; i < that.boxes.length; i++) {
                    if (that.boxes[i].frame()) {
                        that.boxes.splice(i, 1);
                        that.boxes.push(new Box(Math.random() * 350, 0, 0, (Math.random() * 1.5), "box" + i, containerId));
                    }
                    let person = that.player.position();
                    let box = that.boxes[i].getBoundingClientRect();
                    if (person.left < box.left + box.width &&
                        person.left + person.width > box.left &&
                        person.top < box.top + box.height &&
                        person.height + person.top > box.top) {
                        console.log("collision");
                    }
                }
            }
            5);
    }
}



class Box {
    constructor(_xpos, _ypos, _xstep, _ystep, _id, _container) {
        this.xpos = _xpos;
        this.ypos = _ypos;
        this.xstep = _xstep;
        this.ystep = _ystep;
        this.id = _id;
        this.container = _container;
        this.height = "40px";
        this.width = "100px";
        this.goodWords = [
            "smallanimals",
            "batteries",
            "greenlights",
            "sleep",
            "icecream",
            "chickens",
            "smallplants",
            "payraise",
            "music",
            "art"];
        this.badWords = [
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
        this.allWords = [
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
        this.elem = this.addBox();

    }
    removeBox() {
        this.container.removeChild(this.elem);
    }

    addBox() {
        let animatedDiv = document.createElement("div");
        //create a text element
        let textContent = document.createElement("P");
        animatedDiv.className = "box";
        animatedDiv.id = this.id;
        //randomly choose a word from the array to reference the class to give to the text element
        textContent.className = this.allWords[Math.floor(Math.random() * 25)];
        this.container.appendChild(animatedDiv);
        //append the text content to the animated div
        animatedDiv.appendChild(textContent);
        return animatedDiv;
    }


    // The animation code
    frame() {
        // Box 1
        if (this.ypos > 365) {
            this.removeBox();
            return true;
        }
        //supposed to be the collision algorithm
        /* for (var l = 0; l < boxes.length; l++) {
             if (
                 boxes[i].xpos < player.xpos + player.width &&
                 boxes[i].xpos + boxes[i].width > player.xpos &&
                 boxes[i].ypos < player.ypos + player.height &&
                 boxes[i].ypos + boxes[i].height > player.ypos
             ) {
                 // collision detected!
                 document.write("collision!");
             }
             */
        this.ypos = this.ypos + this.ystep;
        this.render();
        return false;
    }

    collisionDetection() {
        /*if () {
             return true;
         } */
    }

    winningWord() {
        return this.goodWords[Math.floor(Math.random() * 10)];
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
    position() {
        return this.elem.getBoundingClientRect();
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



container.addEventListener("click", event => {
    player.move(event);
});
//let myApp = new GameOfLife();
let hb = new Healthbar();
let newGame = new Game();
newGame.play();

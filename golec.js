class Game {
    constructor() {
        this.boxes = [];
        this.boxesNum = Math.ceil(Math.random() * 3) + 5;
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
        this.player = new Player(container, 600, 400, 50, 50);
        this.click = this.container.addEventListener("click", event => {
            this.player.move(event)
        });
        this.healthbar = new Healthbar();
        this.popUp = document.getElementById('endScreen');
        this.button = document.getElementById("replayButton");
        this.popUp.style.display = "none";

    }


    play() {
        const that = this;
        let containerId = document.getElementById("container");
        for (var i = 0; i < that.boxesNum; i++) {
            // create box
            let box = new Box(Math.round(Math.random() * 525), 0, 0, (Math.random() * 1.5)+ 0.5, "box" + i, containerId);
            that.boxes.push(box);
        }
        let id = setInterval(function () {
                let person = that.player.elem.getBoundingClientRect();
                for (var i = 0; i < that.boxes.length; i++) {
                    if (that.boxes[i].frame()) {
                        that.boxes.splice(i, 1);
                        that.boxes.push(new Box(Math.random() * 525, 0, 0, (Math.round(Math.random() * 1.5) + 0.5), "box" + i, containerId));
                    }
                    let word = that.boxes[i].elem.getBoundingClientRect();
                    if (person.left < word.left + word.width &&
                        person.left + person.width > word.left &&
                        person.top < word.top + word.height &&
                        person.height + person.top > word.top) {
                        that.boxes.push(new Box(Math.random() * 525, 0, 0, (Math.random() * 1.5) + 0.5, "box" + i, containerId));
                        that.boxes[i].removeBox();
                        that.boxes.splice(i, 1);
                        that.healthbar.updateHealth(5);
                    }
                }
                if (that.healthbar.health <= 0) {
                    for (var i = 0; i < that.boxes.length; i++) {
                        that.boxes[i].removeBox();
                    }
                    clearInterval(id);
                    that.popUp.style.display = "block";

                }
            },
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
        this.health = Math.ceil(Math.random() * 100);
        this.elem.min = 0;
        this.elem.max = 100;
        this.elem.value = this.health;
    }

    updateHealth(value) {
        this.health = this.health - value;
        this.elem.value = this.health;
    }
}






//let myApp = new GameOfLife();
let newGame = new Game();
newGame.play();

function replay() {
    newGame = new Game();
    newGame.play();
}

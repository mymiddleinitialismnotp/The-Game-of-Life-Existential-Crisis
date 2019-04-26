class GameOfLife {
    constructor(){
        this.player = new Player()
        window.addEventListener('keydown', (e) => {
            if(e.keyCode == 37) {
                console.log("move left!");
                this.player.changeColumnPosition(-1);
                this.player.render();


            }else if(e.keycode == 39) {
                console.log(move)
                this.player.changeColumnPosition(+1);
                this.player.render();
            }
        }



class Player {
    constructor(_xpos, _ypos, _imgsrc) {
        this.colPos = 2;
        this.imgsrc = _imgsrc;
        this.div = document.getElementById("player");
    }

    playerWordDeath() {

    }

    playerCatchWinnerWord() {

    }

    changeColumnPosition(delta){
        this.colPos = this.colPos + delta;
        console.log(this.colPos);
    }

    render() {
        let parent = this.div.parentNode;

        if(this.colPos == 2) {
             //This is where you need to remove it from one parent column
            // And then append it as a child to a new parent column
//https://www.w3schools.com/jsref/met_node_removechild.asp
        }
    }
}




class Anvil {
    constructor(_xpos, _ypos, _imgsrc) {
        this.xpos = _xpos;
       this.ypos = _ypos;
       this.imgsrc = _imgsrc;
    }

     smashPlayer() {

   }
}




class Word {
    constructor(_xpos, _ypos, _ystep, _id) {
        this.xpos = _xpos;
        this.ypos = _ypos;
        this.ystep = _ystep;
        this.elem = document.getElementById(_id);
        this.goodWords = ["small animals", "batteries", "green lights", "sleep", "ice cream", "chickens", "small plants", "pay raise", "music", "art"];
        this.badWords = ["anxiety", "depression", "taxes", "dictators", "eyebrow mites", "homework", "moist", "tourists", "sneezing", "dirty dishes", "wet socks", "weak handshakes", "overexplaining", "student debt", "sweat"];
        this.win = "";
    }
     winningWord(){
        this.win = this.goodwords[Math.floor(Math.Random()*10)]
    }
     render() {
    this.elem.style.top = "0px";
    this.elem.style.left = this.xpos + "px";
  }
}

// Some variables that we need below
var boxes = [];
var numBoxes = 250;
var container = document.getElementById("container");

// Dynamically create the boxes
for(var i = 0; i < numBoxes; i++){
    let animatedDiv = document.createElement("div");
    animatedDiv.className = "box";
    animatedDiv.id = "box" + i;
    container.appendChild(animatedDiv);
    boxes[i] = new Box(Math.random()*350,
                       Math.random()*350,
                       Math.random(),
                       Math.random(),
                       '#'+Math.floor(Math.random()*16777215).toString(16),
                       animatedDiv.id);
}

var id = setInterval(frame, 5);

// The animation code
function frame() {
    // Box 1
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].xpos > 350 || boxes[i].xpos < 0) {
            boxes[i].xstep = -boxes[i].xstep;
        }
        if (boxes[i].ypos > 350 || boxes[i].ypos < 0) {
            boxes[i].ystep = -boxes[i].ystep;
        }

        boxes[i].xpos = boxes[i].xpos + boxes[i].xstep;
        boxes[i].ypos = boxes[i].ypos + boxes[i].ystep;
        boxes[i].render();
    }
}



class Healthbar {
    constructor(_xpos, _ypos, _id) {
        this.xpos = _xpos;
        this.ypos = _ypos;
        this.healthbar = getElementByClassName("healthbar");
   }
    let healthValue = (Math.ceil * (Math.random()*100))
}


let myApp = new GameOfLife();


var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.y + rect1.height > rect2.y) {
    // collision detected!
}

// filling in the values =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // collision detected!
}

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
    constructor(_xpos, _ypos, _imgsrc) {
        this.xpos = _xpos;
        this.ypos = _ypos;
        this.ystep = _ystep;
        this.color = _color;
        this.elem = document.getElementById(_id);

    }

     let goodwords = ["small animals", "batteries", "green lights", "sleep", "ice cream", "chickens", "small plants", "pay raise", "music", "art"];
     let badwords = ["anxiety", "depression", "taxes", "dictators", "eyebrow mites", "homework", "moist", "tourists", "sneezing", "dirty dishes", "wet socks", "weak handshakes", "overexplaining", "student debt", "sweat"];

}





class Healthbar {
    constructor(_xpos, _ypos, _id) {
        this.xpos = _xpos;
        this.ypos = _ypos;
        this.id = getElementByClassName("healthbar");
   }
    let healthValue = (Math.ceil * (Math.random()*100))
}


let myApp = new GameOfLife();

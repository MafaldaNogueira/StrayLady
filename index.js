let newGame;
let newLady;
let clock = 30;
let song = new Audio ("/audio/song.mp3");


document.getElementById('house-image').style.display = 'none';
document.getElementById('score-div').style.display = 'none';
document.getElementById('timer').style.display = 'none';
let time = document.getElementById('time');



const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');

document.getElementById('start-button').onclick = () => {
    startGame();
    printSeconds();
}


document.onkeydown = (e) => {
    let whereToGo = e.keyCode;
    newGame.lady.moveLady(whereToGo);
}



function startGame() {
  
    document.getElementById('house-image').style.display = 'block';
    document.getElementById('score-div').style.display = 'block';
    document.getElementById('timer').style.display = 'block';
    newGame = new Game();
    newLady = new Lady();
    newGame.lady = newLady;
    newGame.lady.drawLady();
    song.play();
    updateCanvas();
   console.log(song);
}
function printTime(){
    printSeconds();
}

function printSeconds(){
    let intervalId = setInterval(() => {   
        clock -= 1;  
        time.innerHTML = clock;
        if (clock === 0) {
            clearInterval(intervalId);
            return alert("GAME OVER");
        }
    }, 1000);

}



 function detectCollision(cat) {
     return !((newLady.y > cat.y + cat.height) || 
     (newLady.x + newLady.width < cat.x) 
     || 
     (newLady.x  > cat.x + cat.width))
 }





let catsFrequency=0;
function updateCanvas () {
    ctx.clearRect(0, 0, 600, 700);
    newGame.lady.drawLady();
    catsFrequency++;
    if(catsFrequency % 120===0){
        let randomCatX = Math.floor(Math.random() * 450);
      //  let randomCatY = 0;
        let newCat = new Cats(randomCatX);
        newGame.cats.push(newCat);
       // console.log(newGame.cats);
    }
    for(let i = 0; i<newGame.cats.length; i++) {
        newGame.cats[i].y++;
        newGame.cats[i].drawObstacle();
        if (detectCollision(newGame.cats[i])) { 
            console.log("apanhei um gato!", i);
            newGame.cats.splice(i, 1);
            newGame.score++;
            document.getElementById('score').innerHTML = newGame.score;
            continue;
           
        }
    }
    requestAnimationFrame(updateCanvas);
}


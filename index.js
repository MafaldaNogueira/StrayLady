let newGame;
let newLady;

document.getElementById('house-image').style.display = 'none';

const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');

document.getElementById('start-button').onclick = () => {
    startGame();
}



document.onkeydown = (e) => {
    let whereToGo = e.keyCode;
    newGame.lady.moveLady(whereToGo);
}

function startGame() {
    document.getElementById('house-image').style.display = 'block';
    newGame = new Game();
    newLady = new Lady();
    newGame.lady = newLady;
    newGame.lady.drawLady();
    updateCanvas();

}

function detectCollision(cat) {
    return newLady.y < cat.y && newLady.x + newLady.width < cat.x
}
// function detectCollision(cat) {
//     return ((newLady.y > cat.y + cat.height) || 
//     (newLady.x + newLady.width < cat.x) || 
//     (newLady.x - newLady.width  > cat.x + cat.width))
// }
let catsFrequency=0;

function updateCanvas () {
    ctx.clearRect(0, 0, 500, 600);
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
            console.log('gato')
            // newGame.score = 10;
            // document.getElementById('score').innerHTML = 10;
            // newGame.cats = [newGame.score];
        }
    }
    requestAnimationFrame(updateCanvas);
}


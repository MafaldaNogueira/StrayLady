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


function detectCollision(dog){
    return !((newLady.y > dog.y + dog.height) || 
    (newLady.x + newLady.width < dog.x) 
    || 
    (newLady.x  > dog.x + dog.width))
}

function detectCollision(cart){
    return !((newLady.y > cart.y + cart.height) || 
    (newLady.x + newLady.width < cart.x) 
    || 
    (newLady.x  > cart.x + cart.width))
}



let dogsFrequency=0;
let catsFrequency=0;
let cartsFrequency=0;
function updateCanvas () {
    ctx.clearRect(0, 0, 900, 450);
    newGame.lady.drawLady();
    catsFrequency++;
    dogsFrequency++;
    cartsFrequency++;
    if(catsFrequency % 120===0){
        let randomCatX = Math.floor(Math.random() * 450);
        let newCat = new Cats(randomCatX);
        newGame.cats.push(newCat);
    }

    if(dogsFrequency % 190===1){
        let randomDogX = Math.floor(Math.random() * 450);
        let newDog = new Dogs(randomDogX);
        newGame.dogs.push(newDog);
    }
    if(cartsFrequency % 120===0){
        let randomCartX = Math.floor(Math.random() * 450);
        let newCart = new Carts(randomCartX);
        newGame.carts.push(newCart);
    }



    for(let i = 0; i<newGame.cats.length; i++) {
        newGame.cats[i].y++;
        newGame.cats[i].drawObstacle();
        if (detectCollision(newGame.cats[i])) { 
            newGame.cats.splice(i, 1);
            newGame.score++;
            document.getElementById('score').innerHTML = newGame.score;
            continue;
           
        }
    }
    for(let i = 0; i<newGame.dogs.length; i++) {
        newGame.dogs[i].y++;
        newGame.dogs[i].drawObstacle();
        if (detectCollision(newGame.dogs[i])) { 
            newGame.dogs.splice(i, 1);
            newGame.score--;
            document.getElementById('score').innerHTML = newGame.score;
            continue;
           
        }
    }

    for(let i = 0; i<newGame.carts.length; i++) {
        newGame.carts[i].y++;
        newGame.carts[i].drawObstacle();
        if (detectCollision(newGame.carts[i])) { 
            newGame.carts.splice(i, 1);
            newGame.score--;
            document.getElementById('score').innerHTML = newGame.score;
            continue;
           
        }
    }


    requestAnimationFrame(updateCanvas);
}


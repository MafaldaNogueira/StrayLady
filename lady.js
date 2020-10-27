class Lady {
    constructor() {
        this.x=220;
        this.y=300;
        this.width=75;
        this.height=150;
        this.img="./images/spritesheet.png";
    }

    drawLady(){
        const ladyImg = new Image();
        ladyImg.src = this.img;
     //   ladyImg.addEventListener('load', () => {
          ctx.drawImage(ladyImg, this.x, this.y, this.width, this.height);
     //   });
    }


    moveLady(keyCode){
     // console.log('x', this.x);
      // console.log('y', this.y);
        ctx.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode){
          case 37:
            if(this.x >0){
            this.x -= 15;
            }
            break;
          case 39:
            if(this.x < 800){
            this.x += 15;
            }
            break;
        }
      }
    }
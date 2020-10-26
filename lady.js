class Lady {
    constructor() {
        this.x=220;
        this.y=150;
        this.width=60;
        this.height=90;
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
            this.x -= 5;
            break;
          case 39:
            this.x += 5;
            break;
        }
      }
    }
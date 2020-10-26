class Lady {
    constructor() {
        this.x=220;
        this.y=190;
        this.width=70;
        this.height=100;
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
            if(this.x < 500){
            this.x += 15;
            }
            break;
        }
      }
    }
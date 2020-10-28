class Lady {
    constructor(x, y) {
        this.x=x;
        this.y=y;
        this.width=75;
        this.height=150;
        this.vx=0;
        this.vy=2;
        this.userPull= 0;
        this.gravity =  0.3;
        this.image = new Image()
        this.direction = 'left';
    }

    drawLady(){

      let lady = this.image
      if(this.direction === 'left') {
        lady.src = 'images/ladyback.png'
      } else if(this.direction === 'right') {
        lady.src = 'images/spritesheet.png'
      }
      
      ctx.drawImage(lady, this.x, this.y, this.width, this.height);

    }

    jumpLady(){
        let sideWalk = canvas.height - this.height;
        if (this.y > sideWalk) {
            this.y = sideWalk;
            this.vy = 0;
        }
    }

    topLady(){
      let top=0;
      if(this.y < top){
        this.y=top + this.height - (this.height);
        this.vy=0;
      }
    }



    moveLady(keyCode){

        ctx.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode){
          case 37:
            this.direction = "left";
            if(this.x >0){
            this.x -= 25;
            }
            break;
          case 39:
            this.direction = "right";
            if(this.x < 800){
            this.x += 25;
            }
            break;
          case 38:
            this.userPull = 0.4;
            break;
        }
      }
    }
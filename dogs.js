class Dogs {
    constructor(x) {
        this.x=x;
        this.y=0;
        this.width=50;
        this.height=60;
        this.img="./images/dog.png";
    }
drawObstacle() {
    const dogImg = new Image();
    dogImg.src = this.img;
    ctx.drawImage(dogImg, this.x, this.y, this.width, this.height);
}
}


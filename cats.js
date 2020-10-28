class Cats {
    constructor(x) {
        this.x=x;
        this.y=0;
        this.width=90;
        this.height=80;
        this.img="./images/cat.png";
    }
drawObstacle() {
    const catImg = new Image();
    catImg.src = this.img;
    ctx.drawImage(catImg, this.x, this.y, this.width, this.height);
}
}


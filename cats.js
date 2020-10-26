class Cats {
    constructor(x) {
        this.x=x;
        this.y=0;
        this.width=60;
        this.height=90;
        this.img="./images/css_sprites (1).png";
    }
drawObstacle() {
    const catImg = new Image();
    catImg.src = this.img;
    ctx.drawImage(catImg, this.x, this.y, this.width, this.height);
}
}


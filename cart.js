class Carts {
    constructor(x) {
        this.x=x;
        this.y=0;
        this.width=50;
        this.height=60;
        this.img="./images/cart.png";
    }
drawObstacle() {
    const cartImg = new Image();
    cartImg.src = this.img;
    ctx.drawImage(cartImg, this.x, this.y, this.width, this.height);
}
}


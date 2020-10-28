class Carts {
    constructor() {
        this.x=900;
        this.y=390;
        this.width=55;
        this.height=65;
        this.img="./images/cart.png";
    }
drawObstacle() {
    const cartImg = new Image();
    cartImg.src = this.img;
    ctx.drawImage(cartImg, this.x, this.y, this.width, this.height);
}
}


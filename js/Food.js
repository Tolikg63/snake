class Food extends Graphics {
   constructor() {
      super();
      this.x = this.getRandomNumber(this.canvas.width - 40);
      this.y = this.getRandomNumber(this.canvas.height - 40);
      this.w = 30;
   }
   restart() {
      this.x = this.getRandomNumber(this.canvas.width - 40);
      this.y = this.getRandomNumber(this.canvas.height - 40);
      this.draw();
   }
      
   draw() {
      let image = new Image();
      image.src = 'images/apple.png';
      this.ctx.drawImage(image, this.x, this.y, this.w, this.w);
   }
}
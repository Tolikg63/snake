class Snake extends Graphics {
   constructor() {
      super();
      this.body = [new Rectangle()];
      this.direction = '';
   }
   draw() {
      this.ctx.fillStyle = '#34c6eb';
      this.ctx.strokeStyle = "black";
      this.body.forEach(item => {
         this.ctx.fillRect(item.x, item.y, item.w, item.w);
         this.ctx.strokeRect(item.x, item.y, item.w, item.w);
      });
   }
   move() {
      for (let i = this.body.length - 1; i >= 0; i--) {
         if (i === 0) {
            if (this.direction == 'right') {
               this.body[i].x += 20;
            } else if (this.direction == 'left') {
               this.body[i].x -= 20;
            } else if (this.direction == 'up') {
               this.body[i].y -= 20;
            } else if (this.direction == 'down'){
               this.body[i].y += 20;
            }
         } else {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
         }
      }
      this.draw();
   }   
   check(food) {
      for (let i = 0; i < this.body.length; i++) {
         let item = this.body[i];
         if ((item.x > food.x && item.x < food.x + food.w) && (item.y > food.y && item.y < food.y + food.w)) {
            return true;
         }
      }
      return false;
   }
   wall() {
      for (let i = 0; i < this.body.length; i++) {
         let item = this.body[i];
         if ((item.x > this.canvas.width) || (item.y > canvas.y)) {
            return true;
         }
      }  
   }
}
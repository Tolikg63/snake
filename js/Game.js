class Game extends Graphics {
   constructor() {
      super();
      this.snake = new Snake();
      this.food = new Food();
      this.score = 0;
      this.bindEvents();
      
   }
   play() {
      let score = 0;
      this.ctx.fillStyle = "brown";
      this.ctx.font = "32px Tahoma";
      
      this.game = setInterval(() => { 
         this.ctx.fillText(score, 10, 30);    
         let w = this.canvas.width;
         let h = this.canvas.height;
         this.ctx.clearRect(0, 0, w, h);
         this.food.draw();
         this.snake.move();
         if (this.snake.check(this.food)) {
            score++;
            this.snake.body.push(new Rectangle());
            this.food.restart();      
         }
         if (this.snake.wall()) {
            clearInterval(this.game);
         }
      }, 100);
   }
   bindEvents() {
      document.body.addEventListener('keydown', (e) => {
         if (e.key == 'ArrowRight' && this.snake.direction != 'left') {
            this.snake.direction = 'right';
         } else if (e.key == 'ArrowLeft' && this.snake.direction != 'right') {
            this.snake.direction = 'left';
         } else if (e.key == 'ArrowUp' && this.snake.direction != 'down') {
            this.snake.direction = 'up';
         } else if (e.key == 'ArrowDown' && this.snake.direction != 'up') {
            this.snake.direction = 'down';
         } else if (e.key == 'p') {
            this.snake.direction = '';
         }
      });
      // for (let i = 0; i < this.snake.body.length; i++) {
      //    if (this.snake.body[i].x < 30 && this.snake.body[i].y > 30) {
      //       clearInterval(this.game);
      //    }
      // }
   }
}

let app = new Game();
app.play();
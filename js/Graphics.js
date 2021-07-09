class Graphics {
   constructor() {
      this.canvas = document.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
   }

   getRandomNumber(max) {
      return parseInt(Math.random() * max);
   }
}
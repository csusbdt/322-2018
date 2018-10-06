/*
TODO Reading:
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
https://nicolahibbert.com/optimising-html5-canvas-games/
*/

(function() {
  let canvas = document.getElementById('game');
  let ctx    = canvas.getContext('2d', { alpha: false });

  function Box(x, y, w, h, dx, color) {
    this.x  = x;
    this.y  = y;
    this.w  = w;
    this.h  = h;
    this.dx = dx;
    this.color = color;
  }

  Box.prototype.toggleColor = function() {
    if (this.color === '#ff0000') {
      this.color = '#00ff00';
    } else {
      this.color = '#ff0000';
    }
  };

  Box.prototype.update = function(dt) {
    this.x += this.dx * dt;
    if (this.x > canvas.width) this.x = -this.w;
  }

  Box.prototype.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };

  Box.prototype.mousedown = function(x, y, next) {
    if (
      x > this.x            && 
      x < this.x + this.w   && 
      y > this.y            && 
      y < this.y + this.h
    ) {
      this.toggleColor();
    } else if (next) {
      next.mousedown(x, y);
    }
  };

  /*
    Create game objects.
  */
  let box1 = new Box(0, 50, 80, 32, 100, '#ff0000');
  let box2 = new Box(50, 150, 80, 16, 100, '#ff44AA');

  /*
     The simulation loop is a callback function that schedules itself
     for each frame of animation. 
  */
  {
    let previousMillis = 0;
    function anim(millis) {
      let dt = (millis - previousMillis) / 1000.0;
      previousMillis = millis;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      box1.update(dt);
      box2.update(dt);
      box1.draw();
      box2.draw();
      window.requestAnimationFrame(anim);
    }
    window.requestAnimationFrame(anim);
  }

  /*
    Define event handlers.
  */
  function mousedown(e) {
    let x = e.clientX - canvas.getBoundingClientRect().left;
    let y = e.clientY - canvas.getBoundingClientRect().top;
    box1.mousedown(x, y, box2);
  }
  canvas.addEventListener("mousedown", mousedown, false);

})();


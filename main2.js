/*
  Project goal: to illustrate object-oriented design in Javascript.
  TODO: create 2 or more boxes whose colors can be individually toggled.

TODO Reading:

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas

https://nicolahibbert.com/optimising-html5-canvas-games/

https://humanwhocodes.com/blog/2011/05/03/better-javascript-animations-with-requestanimationframe/

https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

https://stackoverflow.com/questions/8205828/html5-canvas-performance-and-optimization-tips-tricks-and-coding-best-practices

*/

(function() {
  let canvas = document.getElementById('game');
  let ctx    = canvas.getContext('2d', { alpha: false });

  box = {
     x    :   0 ,
     y    :  50 ,
     w    :  80 ,
     h    :  32 ,
    dx    : 100 , // pixels per second
    color : '#ff0000',
    previousMillis : 0
  };

  box.toggleColor = function() {
    if (this.color === '#ff0000') {
      this.color = '#00ff00';
    } else {
      this.color = '#ff0000';
    }
  };

  box.update = function(dt) {
    this.x += this.dx * dt;
    if (this.x > canvas.width) this.x = -this.w;
    this.draw();
  }

  box.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };

  box.mousedown = function(x, y) {
    if (
      x > this.x            && 
      x < this.x + this.w   && 
      y > this.y            && 
      y < this.y + this.h
    )
    this.toggleColor();
  };

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
      box.update(dt);
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
    box.mousedown(x, y);
  }
  canvas.addEventListener("mousedown", mousedown, false);

})();


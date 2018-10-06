(function() {
  function Box(x, y, w, h, dx) {
    this.x       =  x | 0;
    this.y       =  y | 0;
    this.w       =  w | 0;
    this.h       =  h | 0;
    this.dx      = dx | 0;
    this.color   = '#ff0000';
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
    if (this.x > app.canvas.width) this.x = -this.w;
  }

  Box.prototype.draw = function() {
    app.context.fillStyle = this.color;
    app.context.fillRect(this.x, this.y, this.w, this.h);
  };

  Box.prototype.contains = function(x, y) {
    return (
      x > this.x            && 
      x < this.x + this.w   && 
      y > this.y            && 
      y < this.y + this.h
    );
  }

  Box.prototype.mousedown = function(x, y) {
    if (this.contains(x, y)) {
      this.toggleColor();
      return true;
    }
    return false;
  };

  window.Box = Box;

})();


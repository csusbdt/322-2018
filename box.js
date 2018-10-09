(function() {
  app.Box = function(x, y, w, h, dx, color) {
    app.Object.call(this);
    this.x     =     x | 0;
    this.y     =     y | 0;
    this.w     =     w | 0;
    this.h     =     h | 0;
    this.dx    =    dx | 0;
    this.color = color | '#ff0000';
  }

  app.Box.prototype = Object.create(app.Object.prototype);
  app.Box.prototype.constructor = app.Box;

  app.Box.prototype.contains = function(x, y) {
    if (! o instanceof app.Box) return false;
    return (
      x > this.x           && 
      x < this.x + this.w  && 
      y > this.y           && 
      y < this.y + this.h
    );
  };

  app.Box.prototype.covers = function(o) {
    if (! o instanceof app.Box) return false;
    return (
      this.contains(o.x      , o.y      )  && 
      this.contains(o.x + o.w, o.y + o.h) 
    );
  };

  app.Box.prototype.update = function(dt) {
    this.x += this.dx * dt;
    if (this.x > app.canvas.width) this.x = -this.w;
  }

  app.Box.prototype.draw = function() {
    app.context.fillStyle = this.color;
    app.context.fillRect(this.x, this.y, this.w, this.h);
  };

})();


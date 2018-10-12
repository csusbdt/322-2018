g.Box = function(x, y, w, h, dx, color) {
  g.Object.call(this);
  this.x     =     x || 0;
  this.y     =     y || 0;
  this.w     =     w || 0;
  this.h     =     h || 0;
  this.dx    =    dx || 0;
  this.color = color || '#00ff00';
}

g.Box.prototype = Object.create(g.Object.prototype);
g.Box.prototype.constructor = g.Box;

g.Box.prototype.contains = function(x, y) {
  return (
    x > this.x           && 
    x < this.x + this.w  && 
    y > this.y           && 
    y < this.y + this.h
  );
};

g.Box.prototype.covers = function(o) {
  if (! o instanceof g.Box) return false;
  return (
    this.contains(o.x      , o.y      )  && 
    this.contains(o.x + o.w, o.y + o.h) 
  );
};

g.Box.prototype.update = function(dt) {
  this.x += this.dx * dt;
  if (this.x > g.canvas.width) this.x = -this.w;
};

g.Box.prototype.draw = function() {
  g.context.strokeStyle = this.color;
  g.context.strokeRect(this.x, this.y, this.w, this.h);
};



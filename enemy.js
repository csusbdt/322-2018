(function() {
  g.Enemy = function(x, y, w, h, dx) {
    g.Box.call(this, x, y, w, h, dx, '#00ff00');
  };

  g.Enemy.prototype = Object.create(g.Box.prototype);
  g.Enemy.prototype.constructor = g.Enemy;

  g.Enemy.prototype.isLiving = function() {
    return this.color === '#00ff00';
  };

  g.Enemy.prototype.update = function(dt) {
    this.x += this.dx * dt;
    if (this.x > g.canvas.width) this.x = -this.w;
  };

  g.Enemy.prototype.keydown = function(key) {
    if (key === ' ' && g.player.covers(this)) {
      this.color = '#ff0000';
    }
  };

  g.Enemy.prototype.draw = function() {
    g.context.fillStyle = this.color;
    g.context.fillRect(this.x, this.y, this.w, this.h);
  };

})();


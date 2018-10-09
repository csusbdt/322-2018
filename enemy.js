(function() {
  app.Enemy = function(x, y, w, h, dx) {
    app.Box.call(this, x, y, w, h, dx, '#ff0000');
  }

  app.Enemy.prototype = Object.create(app.Box.prototype);
  app.Enemy.prototype.constructor = app.Enemy;

  app.Enemy.prototype.update = function(dt) {
    this.x += this.dx * dt;
    if (this.x > app.canvas.width) this.x = -this.w;
  }

  app.Enemy.prototype.keydown = function(key) {
    if (key === ' ' && app.player.covers(this)) {
      this.color = '#00ff00';
    }
  };

  app.Enemy.prototype.draw = function() {
    app.context.fillStyle = this.color;
    app.context.fillRect(this.x, this.y, this.w, this.h);
  };

})();


(function() {
  app.player = new app.Box(0, 30, 200, 32,  90);
  app.player.color = '#0000ff';

  app.player.update = function(dt) {
    if (app.aKeyDown) {
      this.x -= this.dx * dt;
    } 
    if (app.dKeyDown) {
      this.x += this.dx * dt;
    } 
    if (app.wKeyDown) {
      this.y -= this.dx * dt;
    } 
    if (app.sKeyDown) {
      this.y += this.dx * dt;
    } 
  }

  app.player.mousedown = function(x, y) {
    return false;
  };

})();


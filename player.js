(function() {
  app.player = new app.Box(0, 30, 200, 48,  240);
  app.player.color = '#0000ff';

  app.player.update = function(dt) {
    if (app.aKeyDown || app.leftArrowDown) {
      this.x -= this.dx * dt;
    } 
    if (app.dKeyDown || app.rightArrowDown) {
      this.x += this.dx * dt;
    } 
    if (app.wKeyDown || app.upArrowDown) {
      this.y -= this.dx * dt;
    } 
    if (app.sKeyDown || app.downArrowDown) {
      this.y += this.dx * dt;
    } 
  }

})();


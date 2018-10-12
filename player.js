(function() {
  g.player = new g.Box(0, 30, 200, 48,  240);
  g.player.color = '#0000ff';

  g.player.update = function(dt) {
    if (g.aKeyDown || g.leftArrowDown) {
      this.x -= this.dx * dt;
    } 
    if (g.dKeyDown || g.rightArrowDown) {
      this.x += this.dx * dt;
    } 
    if (g.wKeyDown || g.upArrowDown) {
      this.y -= this.dx * dt;
    } 
    if (g.sKeyDown || g.downArrowDown) {
      this.y += this.dx * dt;
    } 
  }

})();


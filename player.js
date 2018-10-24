(function() {
  g.player = new g.Box(0, 30, 130, 130, 200);
  g.player.walkFrames = [
    { x: 0, y: 0 },  { x: 130, y: 0 },  { x: 0, y: 130 },  { x: 130, y: 130 }
  ];
  g.player.frameIndex = 0;
  g.player.frameDuration = .1;
  g.player.timeToNextFrame = g.player.frameDuration;

  g.player.update = function(dt) {
    if (g.player.timeToNextFrame <= 0) {
      g.player.timeToNextFrame = g.player.frameDuration;
      if (++g.player.frameIndex >= g.player.walkFrames.length) {
        g.player.frameIndex = 0;
      }
    } else {
      g.player.timeToNextFrame -= dt;
    }
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

  g.player.draw = function() {
    let sx = this.walkFrames[this.frameIndex].x;
    let sy = this.walkFrames[this.frameIndex].y;
    let sw = 130;
    let sh = 130;
    g.context.drawImage(
      this.image, 
      sx,
      sy,      
      sw,
      sh,
      this.x, 
      this.y, 
      this.w, 
      this.h);
  };

  g.player.image = document.createElement('img');
  g.player.image.src = 'spritesheet.png';

})();


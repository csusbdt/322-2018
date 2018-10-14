(function() {

  let ai = new g.Object();
  ai.win = false;

  ai.update = function(dt) {
    if (this.win) return;
    let win = true;
    for (let i = 0; i < g.objs.length; ++i) {
      let o = g.objs[i];
      if (o instanceof g.Enemy && o.isLiving()) win = false;
    }
    if (win) {
      g.context.font = '48px serif';
      let w = g.context.measureText(this.text).width;
      let x = g.canvas.width / 2 - .5 * w;
      let y = g.canvas.height / 2 - 15;
      let text = new g.Text('48px serif', x, y, 'Winner!');
      g.clear();
      g.objs.push(text);
      this.win = true;
    }
  }

  g.clear();
  g.objs.push( new g.Enemy( 64,  97, 32, 32, 100) );
  g.objs.push( new g.Enemy( 40,  75, 16, 16, 120) );
  g.objs.push( new g.Enemy(140, 115, 24, 24, 200) );
  g.objs.push( g.player                           );
  g.objs.push( ai                                 );

})();


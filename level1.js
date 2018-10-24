(function() {

  // Duplicate code to re-org:

  let ai = new g.Object();

  ai.update = function(dt) {
    let win = true;
    for (let i = 0; i < g.objs.length; ++i) {
      let o = g.objs[i];
      if (o instanceof g.Enemy && o.isLiving()) win = false;
    }
    if (win) {
      g.loadScript('level2.js');
    }
  }

  g.clear();
  g.objs.push( new g.Enemy( 0, 30, 30, 32,  90) );
  g.objs.push( new g.Enemy(50, 75, 30, 16, 190) );
  g.objs.push( g.player                         );
  g.objs.push( ai                               );

})();


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
      document.body.innerHTML = '';
      var node = document.createElement("p");
      var textnode = document.createTextNode("Win!");
      node.appendChild(textnode);
      document.body.appendChild(node);
    }
  }

  g.clear();
  g.objs.push( new g.Enemy( 64,  97, 32, 32, 100) );
  g.objs.push( new g.Enemy( 40,  75, 16, 16, 120) );
  g.objs.push( new g.Enemy(140, 115, 24, 24, 200) );
  g.objs.push( g.player                           );
  g.objs.push( ai                                 );

})();


/*
  Level Zero
*/

(function() {

  let ai = new app.Object();

  ai.update = function(dt) {
    let win = true;
    for (let i = 0; i < app.objs.length; ++i) {
      let o = app.objs[i];
      if (o instanceof app.Enemy && o.isLiving()) win = false;
    }
    if (win) {
      document.body.innerHTML = '';
      var node = document.createElement("p");
      var textnode = document.createTextNode("Win!");
      node.appendChild(textnode);
      document.body.appendChild(node);
      setTimeout(function() { window.location = 'level2.html'; }, 2000 );
    }
  }

  while (app.objs.length > 0) app.objs.pop();

  app.objs.push(new app.Enemy( 0, 30, 80, 32,  90) );
  app.objs.push(new app.Enemy(50, 75, 80, 16, 190) );
  app.objs.push(app.player                         );
  app.objs.push(ai                                 );

})();


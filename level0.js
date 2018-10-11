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
      console.log('WIN!!!');
    }
  }

  while (app.objs.length > 0) app.objs.pop();
  app.objs.push(new app.Enemy( 0, 30, 80, 32,  90));
  app.objs.push(new app.Enemy(50, 75, 80, 16, 190));
  app.objs.push(app.player);
  app.objs.push(ai);

})();


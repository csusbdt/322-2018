/*
  Level Zero
*/

(function() {

  while (app.objs.length > 0) app.objs.pop();
  app.objs.push(new app.Box( 0, 30, 80, 32,  90, '#ff0000'));
  app.objs.push(new app.Box(50, 75, 80, 16, 190, '#ff44AA'));
  app.objs.push(app.player);

})();


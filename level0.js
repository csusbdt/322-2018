/*
  Level Zero
*/

(function() {

  while (app.objs.length > 0) app.objs.pop();
  app.objs.push(new app.Enemy( 0, 30, 80, 32,  90));
  app.objs.push(new app.Enemy(50, 75, 80, 16, 190));
  app.objs.push(app.player);

})();


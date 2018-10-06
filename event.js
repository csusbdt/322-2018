// Mousedown

(function() {

  function mousedown(e) {
    let x = e.clientX - app.canvas.getBoundingClientRect().left;
    let y = e.clientY - app.canvas.getBoundingClientRect().top;
    for (var i = 0; i < app.objs.length; ++i) {
      let o = app.objs[i];
      if (o.mousedown(x, y)) {
        return;
      }
    }
  }

  app.canvas.addEventListener("mousedown", mousedown, false);

})();


// Keydown

(function() {

  function keydown(e) {
    e = e || window.event;
    if (e.key === 'f') {
      app.fullscreen();
    }
    if (e.key === 'r') {
      console.log(app.fps);
    }
  }

  window.addEventListener('keydown', keydown);

})();


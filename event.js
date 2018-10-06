// Mousedown

(function() {

  function mousedown(e) {
    let x = e.clientX - app.canvas.getBoundingClientRect().left;
    let y = e.clientY - app.canvas.getBoundingClientRect().top;
    // Need to redo this !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //box1.mousedown(x, y) || box2.mousedown(x, y);
    console.log('Need to finish this.');
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


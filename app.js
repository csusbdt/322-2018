/*
Define the global application object "app" and
start the simulation loop.
*/
window.app = {};

app.canvas  = document.getElementById('canvas');
app.context = app.canvas.getContext('2d', { alpha: false });
app.objs    = [];
app.t       = 0; // time in seconds (duration into game)
app.fps     = 30;

app.mousedown = function(e) {
  // Convert screen coordinates to canvas coordinates.
  let x = e.clientX - app.canvas.getBoundingClientRect().left;
  let y = e.clientY - app.canvas.getBoundingClientRect().top;
  // Inform all objects until one handles/captures the event.
  for (var i = 0; i < app.objs.length; ++i) {
    let o = app.objs[i];
    if (o.mousedown(x, y)) {
      return;
    }
  }
}

app.keydown = function(e) {
  e = e || window.event;
  if (e.key === 'f') {
    app.fullscreen();
  }
  if (e.key === 'r') {
    console.log(app.fps);
  }
}



app.fullscreen = function() {
  app.canvas.width  = document.body.clientWidth;
  app.canvas.height = document.body.clientHeight;
  if (app.canvas.webkitRequestFullscreen) {
    app.canvas.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  } else if (app.canvas.mozRequestFullScreen) {
    canvas.mozRequestFullScreen();
  } else if (app.canvas.msRequestFullScreen) {
    canvas.msRequestFullscreen();
  } else if (app.canvas.requestFullScreen) {
    canvas.requestFullscreen();
  } else {
    console.log('Game will not play.');
  }
};

app.windowed = function() {
  if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else {
    document.exitFullscreen();
  }
};

document.getElementById('fullscreen').addEventListener(
  "click", 
  function() {
    app.canvas.style.display = 'block';
    app.fullscreen();
    document.getElementById('fullscreen').innerHTML = 'Fullscreen';
  }, 
  false
);

window.addEventListener('keydown', app.keydown);
app.canvas.addEventListener("mousedown", app.mousedown, false);
 
(function() {
  function anim(millis) {
    let t = millis / 1000.0; // convert time to seconds
    let dt = t - app.t;
    app.fps = app.fps * .99 + 1.0 / dt * .01;
    app.t = t; // update the current time in the app object
    app.context.clearRect(0, 0, app.canvas.width, app.canvas.height);
    app.objs.forEach(function(o) { o.update(dt); });
    app.objs.forEach(function(o) { o.draw()    ; });
    window.requestAnimationFrame(anim);
  }
  window.requestAnimationFrame(anim);
})();



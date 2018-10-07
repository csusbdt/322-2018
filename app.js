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

document.getElementById('fullscreen').addEventListener(
  "click", 
  function() {
    app.canvas.style.display = 'block';
    app.fullscreen();
    document.getElementById('fullscreen').innerHTML = 'Fullscreen';
  }, 
  false
);

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



/*
Define the global object "g" for game,
define event listeners, and start the
simulation loop.
*/

window.g = {};

g.canvas  = document.getElementById('canvas');
g.context = g.canvas.getContext('2d', { alpha: false });
g.objs    = [];
g.t       = 0; // time in seconds (duration into game)
g.fps     = 30;

g.clear = function() {
  while (g.objs.length > 0) g.objs.pop();
};

g.loadScript = function(src, cb) {
  var scriptElement = document.createElement('script');
  scriptElement.src = src;
  if (cb) {
    scriptElement.addEventListener('load', cb);
  }
  document.head.appendChild(scriptElement);
};

g.anim = function(millis) {
  let t = millis / 1000.0; // convert time to seconds
  let dt = t - g.t;
  g.fps = g.fps * .99 + 1.0 / dt * .01;
  g.t = t; // update the current time in the app object
  g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
  for (let i = 0; i < g.objs.length; ++i) g.objs[i].update(dt);
  for (let i = 0; i < g.objs.length; ++i) g.objs[i].draw();
  window.requestAnimationFrame(g.anim);
};

g.fullscreen = function() {
  g.canvas.width  = document.body.clientWidth;
  g.canvas.height = document.body.clientHeight;
  if (g.canvas.webkitRequestFullscreen) {
    g.canvas.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  } else if (g.canvas.mozRequestFullScreen) {
    g.canvas.mozRequestFullScreen();
  } else if (g.canvas.msRequestFullScreen) {
    g.canvas.msRequestFullscreen();
  } else if (g.canvas.requestFullScreen) {
    g.canvas.requestFullscreen();
  } else {
    console.log('Game will not run correctly.');
  }
};

g.windowed = function() {
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

////////////////////////////////////////////////////////////////
// Event Listeners
////////////////////////////////////////////////////////////////

document.getElementById('playButton').addEventListener(
  'click', 
  function() {
    g.canvas.style.display = 'block';
    g.fullscreen();
    g.loadScript('level.js');
    window.requestAnimationFrame(g.anim);
  },
  false
);

window.addEventListener(
  'keydown', 
  function(e) {
    e = e || window.event;
         if (e.key === 'f'         ) g.fullscreen();
    else if (e.key === 'r'         ) console.log(app.fps);
    else if (e.key === 'a'         ) g.aKeyDown       = true;
    else if (e.key === 'w'         ) g.wKeyDown       = true;
    else if (e.key === 's'         ) g.sKeyDown       = true;
    else if (e.key === 'd'         ) g.dKeyDown       = true;
    else if (e.key === 'ArrowLeft' ) g.leftArrowDown  = true;
    else if (e.key === 'ArrowUp'   ) g.upArrowDown    = true;
    else if (e.key === 'ArrowDown' ) g.downArrowDown  = true;
    else if (e.key === 'ArrowRight') g.rightArrowDown = true;
    // Inform all objects until one handles/captures the event.
    for (var i = 0; i < g.objs.length; ++i) {
      if (g.objs[i].keydown(e.key)) break;
    }
  }, 
  false
);

window.addEventListener(
  'keyup',
  function(e) {
    e = e || window.event;
         if (e.key === 'a'         ) g.aKeyDown       = false;
    else if (e.key === 'w'         ) g.wKeyDown       = false;
    else if (e.key === 's'         ) g.sKeyDown       = false;
    else if (e.key === 'd'         ) g.dKeyDown       = false;
    else if (e.key === 'ArrowLeft' ) g.leftArrowDown  = false;
    else if (e.key === 'ArrowUp'   ) g.upArrowDown    = false;
    else if (e.key === 'ArrowDown' ) g.downArrowDown  = false;
    else if (e.key === 'ArrowRight') g.rightArrowDown = false;
  }, 
  false
);

g.canvas.addEventListener(
  'mousedown', 
  function(e) {
    e = e || window.event;
    // Convert screen coordinates to canvas coordinates.
    let x = e.clientX - g.canvas.getBoundingClientRect().left;
    let y = e.clientY - g.canvas.getBoundingClientRect().top;
    // Inform all objects until one handles/captures the event.
    for (var i = 0; i < g.objs.length; ++i) {
      if (g.objs[i].mousedown(x, y)) break;
    }
  }, 
  false
);


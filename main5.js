/*
  Goal: Toggle between fullscreen and windowed. 
        Game is initially started in fullscreen.
*/

(function() {
  let canvas  = document.getElementById('game');
  let context = canvas.getContext('2d', { alpha: false });

  /******************************************************************
    Create game objects.
  */
  let box1 = new Box(context,  0,  50, 80, 32, 100, '#ff0000');
  let box2 = new Box(context, 50, 150, 80, 16, 100, '#ff44AA');

  /******************************************************************
    The simulation loop is a callback function that schedules itself
    for each frame of animation. 
  */
  {
    let previousMillis = 0;
    function anim(millis) {
      let dt = (millis - previousMillis) / 1000.0;
      previousMillis = millis;
      context.clearRect(0, 0, canvas.width, canvas.height);
      box1.update(dt);
      box2.update(dt);
      box1.draw();
      box2.draw();
      window.requestAnimationFrame(anim);
    }
    window.requestAnimationFrame(anim); // make the first call
  }

  /******************************************************************
    Define event handlers.
  ******************************************************************/

  function fullscreen() {
    canvas.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    //canvas.mozRequestFullScreen();
    //canvas.msRequestFullscreen();
    //canvas.requestFullscreen();
  }

  function windowed() {
    document.webkitExitFullscreen();
    //document.mozCancelFullScreen();
    //document.msExitFullscreen();
    //document.exitFullscreen();
  }

  function mousedown(e) {
    let x = e.clientX - canvas.getBoundingClientRect().left;
    let y = e.clientY - canvas.getBoundingClientRect().top;
    box1.mousedown(x, y) || box2.mousedown(x, y);
  }
  canvas.addEventListener("mousedown", mousedown, false);

  // See https://unixpapa.com/js/key.html

  function keydown(e) {
    e = e || window.event;
    if (e.key === 'f') {
      fullscreen();
    }
  }

  window.addEventListener('keydown', keydown);

})();


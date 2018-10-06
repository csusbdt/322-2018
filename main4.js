/*
TODO Reading:
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
https://nicolahibbert.com/optimising-html5-canvas-games/
*/

(function() {

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


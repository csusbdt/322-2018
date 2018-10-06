(function() {

  let canvas = document.getElementById('game');
  let ctx = canvas.getContext('2d');

  box = {
    x: 0,
    y: 50,
    w: 40,
    h: 12
  };

  function anim() {
    box.x += 3;
    if (box.x > canvas.width) box.x = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(box.x, box.y, box.w, box.h);
    window.requestAnimationFrame(anim);
  }

window.requestAnimationFrame(anim);

canvas.addEventListener("mousedown", handleCanvasClick, false);

function handleCanvasClick(event)
{
  rect = canvas.getBoundingClientRect();
  var x = Math.trunc(event.clientX - rect.left + .5);
  var y = Math.trunc(event.clientY - rect.top + .5);

  if (
    x > box.x            && 
    x < box.x + box.w    && 
    y > box.y            && 
    y < box.y + box.h) 
  {
    ctx.fillStyle="#FF0000";
  } 
}

})();


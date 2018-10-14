g.Text = function(font, x, y, text) {
  g.Object.call(this);
  this.x     =     x    || 0;
  this.y     =     y    || 0;
  this.font  =     font || '24px san-serif';
  this.text  =     text || '';
}

g.Text.prototype = Object.create(g.Object.prototype);
g.Text.prototype.constructor = g.Text;

g.Text.prototype.draw = function() {
  g.context.font = this.font;
  g.context.fillText(this.text, this.x, this.y);
};



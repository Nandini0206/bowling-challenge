function Game(){
  this.score = 0;
};

Game.prototype.roll = function(pins){
  this.score += pins;
};

Game.prototype.score = function() {
  return this.score;
};

function Game(){
  this.score = 0;
  this.frames = [];
};

Game.prototype.roll = function(pins){
    this.score += pins;
};

Game.prototype.scoreNow = function() {
  return this.score;
};

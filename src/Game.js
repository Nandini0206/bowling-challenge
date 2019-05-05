function Game(){
  this.score = 0;
  this.frame = [];
};

Game.prototype.roll = function(pins){
  return this.frame.push(pins)
};

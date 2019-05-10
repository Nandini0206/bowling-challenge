function Game(){
  this.score = 0;
  this.frame = [];
  this.frames = [];
};

Game.prototype.addRoll = function(pins){
  if (this.frame.length < 2) {
    this.frame.push(pins);
  } else {
   throw new Error('Frame already contains two rolls')
  };
};

Game.prototype.addFrame = function(frame){
  if(this.frames.length < 10) {
    this.frames.push(frame)
  } else {
    throw new Error('Game already has ten frames');
  };
};

Game.prototype.totalScore = function(){
  return this.frame.reduce((a, c) => a + c, 0)
};

Game.prototype.isASpare = function(){
  if(this.totalScore() === 10) {
    return true
  } else {
    return false
  };
};

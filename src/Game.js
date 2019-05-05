function Game(){
  this.score = 0;
  this.frame = [];
  this.frames = [];
};

Game.prototype.addroll = function(pins){
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

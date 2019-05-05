function Game(){
  this.score = 0;
  this.frames = 10;
};

Game.prototype.roll = function(pins){
    this.score += pins;
};

Game.prototype.scoreNow = function(){
  return this.score;
};

// Game.prototype.frames = function(frame){
//   return this.frames.push(frame)
// };

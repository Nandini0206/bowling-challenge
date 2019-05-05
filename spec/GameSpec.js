describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('initialise', function(){
    it('starts with a score of 0', function(){
      expect(game.score).toEqual(0);
    });

    it('starts of with empty frames', function(){
      expect(game.frames).toEqual([]);
    });
  });

  describe('roll', function(){
    it('adds the rolls to the score', function(){
    game.roll(6);
    expect(game.score).toEqual(6);
    });
  });

  describe('scoreNow', function(){
    it('updates score',function(){
    expect(game.scoreNow()).toEqual(game.score);
    });
  });
});

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('initialise', function(){
    it('has a score of 0', function(){
      expect(game.score).toEqual(0);
    });

    it('has empty frames', function(){
      expect(game.frame).toEqual([]);
    });
  });

  describe('roll',function(){
    it('adds rolls to frame', function(){
    game.roll(6);
    game.roll(2);
    expect(game.frame).toContain(6);
    expect(game.frame).toContain(2);
    });
  });
});

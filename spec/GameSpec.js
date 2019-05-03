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
      expect(game.frame).toEqual([]);
    });
  });
});

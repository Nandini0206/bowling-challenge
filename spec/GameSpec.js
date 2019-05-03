describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  descrbe('Gutter game', function(){
    it('score is zero', function(){
      for (var i = 0; i < 20; i++){
      game.roll(0)};
      expect(game.score()).toEqual(0);
    })
  });

  describe('Calculates Score', function(){
    it('adds score of rolls', function(){
      game.roll(2);
      game.roll(3);
      expect(game.score()).toEqual(5);
    });
  });
});

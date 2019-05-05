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
      expect(game.frames).toEqual([]);
    });
  });

  describe('roll',function(){
    it('adds first roll to frame', function(){
    game.addroll(6);
    expect(game.frame).toEqual([6])
    });

    it('adds second roll to frame', function(){
    game.addroll(6);
    game.addroll(2);
    expect(game.frame).toEqual([6,2]);
    });

    it('adds no more than 2 rolls to a frame', function(){
    game.addroll(4);
    game.addroll(3);
    expect(function(){game.addroll(1)}).toThrowError('Frame already contains two rolls');
    expect(game.frame).toEqual([4,3]);
    });
  });

  describe('frame', function(){
    it('add frame into frames array', function(){
      game.addFrame('frame');
      expect(game.frames).toEqual(['frame']);
    });

    it('can add more than one frame into frames array', function(){
      game.addFrame('frame')
      game.addFrame('frame')
      expect(game.frames).toEqual(['frame', 'frame']);
    });

    it('does not add more than 10 frames to a game', function(){
      for (var i = 0; i < 10; i++) {
        game.addFrame('frame');
      };
      expect(function(){game.addFrame('frame')}).toThrowError('Game already has ten frames');
    });
  });
});

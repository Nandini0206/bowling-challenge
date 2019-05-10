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
    game.addRoll(6);
    expect(game.frame).toEqual([6])
    });

    it('adds second roll to frame', function(){
    game.addRoll(6);
    game.addRoll(2);
    expect(game.frame).toEqual([6,2]);
    });

    it('adds no more than 2 rolls to a frame', function(){
    game.addRoll(4);
    game.addRoll(3);
    expect(function(){game.addRoll(1)}).toThrowError('Frame already contains two rolls');
    expect(game.frame).toEqual([4,3]);
    });

    it('ends frame if first roll is a strike', function(){
    game.addRoll(10);
    expect(game.frame).toEqual([10,0]);
    });
  });

  describe('frame', function(){
    it('add frame into frames array', function(){
      game.addFrame('frame');
      expect(game.frames).toEqual(['frame']);
    });

    it('can add more than one frame into frames array', function(){
      game.addFrame('frame');
      game.addFrame('frame');
      expect(game.frames).toEqual(['frame', 'frame']);
    });

    it('does not add more than 10 frames to a game', function(){
      for (var i = 0; i < 10; i++) {
        game.addFrame('frame');
      };
      expect(function(){game.addFrame('frame')}).toThrowError('Game already has ten frames');
    });
  });

  describe('total score',function(){
    it('gives total score of current frame', function(){
    game.addRoll(7);
    expect(game.totalScore()).toEqual(7);
    });

    it('gives total score of current frame', function(){
    game.addRoll(7);
    game.addRoll(1);
    expect(game.totalScore()).toEqual(8);
    });
  });

  describe('is a spare',function(){
    it('returns true if frame is a spare', function(){
    game.addRoll(6);
    game.addRoll(4);
    expect(game.isASpare()).toBe(true);
    });

    it('returns false if frame is not a spare', function(){
    game.addRoll(7);
    game.addRoll(1);
    expect(game.isASpare()).toBe(false);
    });
  });

  describe('is a strike',function(){
    it('returns true if frame is a strike',function(){
    game.addRoll(10);
    expect(game.isAStrike()).toBe(true);
    });

    it('returns false if frame is not a strike',function(){
    game.addRoll(3);
    game.addRoll(3);
    expect(game.isAStrike()).toBe(false);
    });
  });
});

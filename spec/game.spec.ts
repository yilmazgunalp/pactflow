import { expect } from 'chai';
import 'mocha';
import {Game} from '../src/game'

let game: Game;

describe("Game", function() {
  beforeEach(() =>  {
game = new Game('P1', 'P2')
  })
    it("initializes scores as zero", function() {
      const score = game.score();
      expect(score).to.equal("0 - 0");
  });

    it("scores correctly when it is straight win", function() {
      game.pointWonBy('P1')
      let score = game.score();
      expect(score).to.equal("15 - 0");

      game.pointWonBy('P2')
      score = game.score();
      expect(score).to.equal("15 - 15");

      game.pointWonBy('P1')
      game.pointWonBy('P1')

      score = game.score();
      expect(score).to.equal("40 - 15");
      

      game.pointWonBy('P1')
      score = game.score();
      expect(score).to.equal("");

  });

    it("scores correctly after deucing many times", function() {
      game.pointWonBy('P1')
      let score = game.score();
      expect(score).to.equal("15 - 0");

      game.pointWonBy('P2')
      score = game.score();
      expect(score).to.equal("15 - 15");

      game.pointWonBy('P1')
      game.pointWonBy('P1')

      score = game.score();
      expect(score).to.equal("40 - 15");
      
      game.pointWonBy('P2')
      game.pointWonBy('P2')
      score = game.score();
      expect(score).to.equal("Deuce");
      
      game.pointWonBy('P1')
      score = game.score();
      expect(score).to.equal("advantage P1");

      game.pointWonBy('P2')
      score = game.score();
      expect(score).to.equal("Deuce");

      game.pointWonBy('P2')
      score = game.score();
      expect(score).to.equal("advantage P2");

      game.pointWonBy('P1')
      score = game.score();
      expect(score).to.equal("Deuce");

      game.pointWonBy('P1')
      score = game.score();
      expect(score).to.equal("advantage P1");

      game.pointWonBy('P1')
      score = game.score();
      expect(score).to.equal("");

  });
  });

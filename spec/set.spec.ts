import { expect } from 'chai';
import 'mocha';
import {Set} from '../src/set'

let set: Set;

describe("Set", function() {
  beforeEach(() =>  {
set = new Set('P1', 'P2')
  })
    it("initializes scores as zero", function() {
      const score = set.score();
      expect(score).to.equal("0 - 0, 0 - 0");
  });

    it("scores correctly when it is straight win", function() {
      set.pointWonBy('P1')
      let score = set.score();
      expect(score).to.equal("0 - 0, 15 - 0");

      set.pointWonBy('P2')
      score = set.score();
      expect(score).to.equal("0 - 0, 15 - 15");

      set.pointWonBy('P1')
      set.pointWonBy('P1')

      score = set.score();
      expect(score).to.equal("0 - 0, 40 - 15");
      

      set.pointWonBy('P1')
      score = set.score();
      expect(score).to.equal("1 - 0, 0 - 0");

      set.pointWonBy('P1')
      score = set.score();
      expect(score).to.equal("1 - 0, 15 - 0");

  });

    it("scores correctly after tie-break", function() {
      let score;
     winGame(set,'P1')
      score = set.score();
      expect(score).to.equal("1 - 0, 0 - 0");

      winGame(set,'P1')
      winGame(set,'P1')
      winGame(set,'P1')
      winGame(set,'P1')

      winGame(set,'P2')
      winGame(set,'P2')
      winGame(set,'P2')
      winGame(set,'P2')
      winGame(set,'P2')
      winGame(set,'P1')

      set.pointWonBy("P1")


      score = set.score();
      expect(score).to.equal("6 - 5, 1 - 0");

      set.pointWonBy("P1");
      set.pointWonBy("P1");
      set.pointWonBy("P1");
      set.pointWonBy("P1");
      set.pointWonBy("P1");
      set.pointWonBy("P1");

      score = set.score();
      expect(score).to.equal("set won by playerOne");

     


  });
  });

  const winGame = (set: Set, player: string) => {
    set.pointWonBy(player);
    set.pointWonBy(player);
    set.pointWonBy(player);
    set.pointWonBy(player);

  }
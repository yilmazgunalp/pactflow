import { expect } from 'chai';
import 'mocha';
import {Tiebreak} from '../src/tiebreak'

let tiebreak: Tiebreak;

describe("Tiebreak", function() {
  beforeEach(() =>  {
tiebreak = new Tiebreak('P1', 'P2')
  })
    it("initializes scores as zero", function() {
      const score = tiebreak.score();
      expect(score).to.equal("0 - 0");
  });

    

    it("scores correctly", function() {
      tiebreak.pointWonBy('P1')
      let score = tiebreak.score();
      expect(score).to.equal("1 - 0");

      tiebreak.pointWonBy('P2')
      score = tiebreak.score();
      expect(score).to.equal("1 - 1");

      tiebreak.pointWonBy('P1')
      tiebreak.pointWonBy('P1')

      score = tiebreak.score();
      expect(score).to.equal("3 - 1");
      
      tiebreak.pointWonBy('P2')
      tiebreak.pointWonBy('P2')
      score = tiebreak.score();
      expect(score).to.equal("3 - 3");
      
      tiebreak.pointWonBy('P1')
      score = tiebreak.score();
      expect(score).to.equal("4 - 3");

      tiebreak.pointWonBy('P2')
      score = tiebreak.score();
      expect(score).to.equal("4 - 4");

      tiebreak.pointWonBy('P1')
      score = tiebreak.score();
      expect(score).to.equal("5 - 4");

      tiebreak.pointWonBy('P1')
      score = tiebreak.score();
      expect(score).to.equal("6 - 4");

      tiebreak.pointWonBy('P2')
      tiebreak.pointWonBy('P2')
      tiebreak.pointWonBy('P1')
      score = tiebreak.score();
      expect(score).to.equal("7 - 6");
      
     

      tiebreak.pointWonBy('P2')
      tiebreak.pointWonBy('P1')
      score = tiebreak.score();
      expect(score).to.equal("8 - 7");

      tiebreak.pointWonBy('P1')
      score = tiebreak.score();
      expect(score).to.equal("9 - 7");

      tiebreak.pointWonBy('P2')
      score = tiebreak.score();
      expect(score).to.equal("9 - 7");


  });
    it("scores correctly when straight win", function() {
      tiebreak.pointWonBy('P1')
      tiebreak.pointWonBy('P1')
      tiebreak.pointWonBy('P1')
      tiebreak.pointWonBy('P1')
      tiebreak.pointWonBy('P1')
      tiebreak.pointWonBy('P1')
      tiebreak.pointWonBy('P1')
      tiebreak.pointWonBy('P2')
      let score = tiebreak.score();
      expect(score).to.equal("7 - 0");

      

  });
  });

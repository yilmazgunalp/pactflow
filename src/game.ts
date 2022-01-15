import { IScore } from "./IScore";
import { Points } from "./points";
import { GameScores, Players, Scores } from "./utils";

export class Game implements IScore {
completed = false;
scores: GameScores = {
    playerOne: new Points(),
    playerTwo: new Points(),
}
players: Players;
 winner:  keyof Players | undefined;

 constructor(playerOne: string, playerTwo: string) {
   this.players = {
       playerOne,
       playerTwo,
   }
  }
pointWonBy(player: string): string {
    if (this.completed) return 'Error: This game has been completed!';
    const wonBy: keyof Players = player === this.players.playerOne ? "playerOne" : "playerTwo";
    const oponent: keyof Players = wonBy === "playerOne" ? "playerTwo" : "playerOne";
    const wonByPoints = this.scores[wonBy]
    const oponentPoints = this.scores[oponent]
    
    if ( wonByPoints.getScore() === 40 && (oponentPoints.getScore() < 40) || this.scores.advantage === wonBy)  {
       this.completed = true;
       this.winner = wonBy;
       
       return this.winner;
    }

    if ( wonByPoints.getScore() < 40)  {
        wonByPoints.increment();
    }
   
    const playersScoredThree = wonByPoints.getScore() === 40 && oponentPoints.getScore() === 40;

    if ( playersScoredThree)  {
      const  {advantage, deuce} = this.calculateDeuceOrAdvantage(wonBy,this.scores.deuce, this.scores.advantage)
     
      this.scores.deuce = deuce;
      this.scores.advantage = advantage;
      return this.score();
      
    }
        
    return this.score();
}

score() {
    if (this.completed) return "";
    if (this.scores.deuce) return "Deuce"
    if (this.scores.advantage) return `advantage ${this.players[this.scores.advantage]}`
    return `${this.scores.playerOne.getScore()} - ${this.scores.playerTwo.getScore()}`
} 
private calculateDeuceOrAdvantage(wonBy: keyof Players, deuce: boolean | undefined, advantage: keyof Players | undefined) {
    if(deuce) return {advantage: wonBy, deuce: false};
    if (!deuce && !advantage ) return {advantage: undefined, deuce: true}
    if(advantage && advantage !== wonBy) return {advantage: undefined, deuce: true}

    return {advantage: undefined, deuce: false}
}
}
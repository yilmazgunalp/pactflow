import { IScore } from "./IScore";
import { Players, TiebreakScores } from "./utils";

export class Tiebreak implements IScore {
completed = false;
scores: TiebreakScores = {
    playerOne: 0,
    playerTwo: 0,
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
    if (this.completed) return 'Error: This tiebreak has been completed!';
    
        const wonBy: keyof Players = player === this.players.playerOne ? "playerOne" : "playerTwo";
        const oponent: keyof Players = wonBy === "playerOne" ? "playerTwo" : "playerOne";
        let wonByPoints = this.scores[wonBy]
        const oponentPoints = this.scores[oponent]

        if ( wonByPoints < 7 || ((wonByPoints - oponentPoints) < 2) )  {
            this.scores[wonBy] += 1;
         }
        
        if ( this.scores[wonBy] > 6 && ((this.scores[wonBy]  - oponentPoints) > 1) )  {
           this.completed = true;
           this.winner = wonBy;
           
           return this.winner;
        }
        
    return this.score();
}

score() {
    return `${this.scores.playerOne} - ${this.scores.playerTwo}`
} 

}
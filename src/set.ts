import { Game } from "./game";
import { IScore } from "./IScore";
import { Tiebreak } from "./tiebreak";
import { Players, SetScores } from "./utils";

export class Set implements IScore {
completed = false;
scores: SetScores = {
    playerOne: 0,
    playerTwo: 0,
}

players: Players;
currentGame: Game | Tiebreak;
 winner:  keyof Players | undefined;

 constructor(playerOne: string, playerTwo: string) {
   this.players = {
       playerOne,
       playerTwo,
   }
   this.currentGame = new Game(playerOne, playerTwo);
  }
pointWonBy(player: string): string {
    if (this.completed) return 'Error: This set has been completed!';
    this.currentGame.pointWonBy(player);
    if(this.currentGame.completed) {
        
        const wonBy: keyof Players = player === this.players.playerOne ? "playerOne" : "playerTwo";
        const oponent: keyof Players = wonBy === "playerOne" ? "playerTwo" : "playerOne";
        const wonByPoints = this.scores[wonBy]
        const oponentPoints = this.scores[oponent]

        if ( wonByPoints < 6 || this.currentGame instanceof Tiebreak) {
            this.scores[wonBy] += 1;
        }
        
        if (  (this.scores[wonBy] > 5) && ( this.scores[wonBy] - oponentPoints > 1) )  {
           this.completed = true;
           this.winner = wonBy;
           
           return this.winner;
        }
    
      
       
        if ( (this.scores[wonBy] === 6 && oponentPoints === 5) || (this.scores[wonBy] === 5 && oponentPoints === 6) )  {
          this.currentGame = new Tiebreak(this.players.playerOne, this.players.playerTwo)
          
        } else {
            this.currentGame = new Game(this.players.playerOne, this.players.playerTwo)
        }
        
    }
    
    return this.score();
}

score() {
    if (this.completed) return `set won by ${this.winner}`
    return `${this.scores.playerOne} - ${this.scores.playerTwo}, ${this.currentGame.score()}`
} 

}
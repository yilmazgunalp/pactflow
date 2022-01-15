import { IScore } from "./IScore";
import { Set } from "./set";
import { Players, Scores } from "./utils";

export class Match implements IScore {
completed = false;
scores: Scores<number> = {
    playerOne: 0,
    playerTwo: 0,
}

players: Players;
currentSet: Set;
 winner:  keyof Players | undefined;

 constructor(playerOne: string, playerTwo: string) {
   this.players = {
       playerOne,
       playerTwo,
   }
   this.currentSet = new Set(playerOne, playerTwo);
  }
pointWonBy(player: string): string {
return this.currentSet.pointWonBy(player);
}

score() {
    return this.currentSet.score();
} 

}
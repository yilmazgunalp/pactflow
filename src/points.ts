import { points } from "./utils";

export class Points {
 score = 0;

 increment() {
     if(this.score < 3) {
     this.score += 1;
     }
     
 }

 getScore() {
    return points[this.score];
 }

}
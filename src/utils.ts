import { Points } from "./points"

export const points = [0,15,30,40]

export type SetPoints = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Scores<T> = {
    [Property in keyof Players]: T;
}

export type GameScores = Scores<Points> & {
    advantage?: keyof Players;
    deuce?: boolean;
}
export type SetScores = Scores<SetPoints> & {
    tieBreak?: boolean
}
export type TiebreakScores = Scores<number>

export type Players = {
    playerOne: string;
    playerTwo: string;
}
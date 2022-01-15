export interface IScore {
    score: () => string;
    pointWonBy: (player: string) => string
}
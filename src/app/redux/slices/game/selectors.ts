import { RootState } from "../..";

export const selectScore = (state: RootState) => state.game.score;
export const selectIsGameOver = (state: RootState) => state.game.isGameOver;
export const selectDifficulty = (state: RootState) => state.game.difficulty;
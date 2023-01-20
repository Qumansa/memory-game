import { RootState } from "../..";

export const selectScore = (state: RootState) => state.result.score;
export const selectIsGameOver = (state: RootState) => state.result.isGameOver;
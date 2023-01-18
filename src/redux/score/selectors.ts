import { RootState } from "..";

export const selectScore = (state: RootState) => state.score.score;
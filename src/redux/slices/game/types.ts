import { DifficultyType } from "../../../types/difficulty";

export interface gameSliceState {
    isGameOver: boolean;
    score: number;
    difficulty: DifficultyType;
}
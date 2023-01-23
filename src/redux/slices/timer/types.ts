import { DifficultyType } from "../../../types/difficulty";

export interface timerSliceState {
    isActive: boolean;
    value: {
        'Легкий': number,
        'Средний': number,
        'Сложный': number
    },
}

export interface IUpdateTimer {
    difficulty: DifficultyType;
    value: number;
};
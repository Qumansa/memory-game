import { DifficultyType } from "../../../types/difficulty";

export interface timerSliceState {
    isActive: boolean;
    value: {
        'Легкий': null,
        'Средний': number,
        'Сложный': number
    },
}

export interface IUpdateTimer {
    difficulty: Exclude<DifficultyType, 'Легкий'>;
    value: number;
};
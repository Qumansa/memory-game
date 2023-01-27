import { DifficultyType } from "../../../types/difficulty";

export const isValidDifficulty = (str: string): str is DifficultyType => {
    return ['Легкий', 'Средний', 'Сложный'].includes(str);
}
export type DifficultyType = 'Легкий' | 'Средний' | 'Сложный';
export type DifficultyTypeForTimer = Exclude<DifficultyType, 'Легкий'>;
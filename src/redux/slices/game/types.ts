export interface gameSliceState {
    isGameOver: boolean;
    score: number;
    difficulty: 'Легкий' | 'Средний' | 'Сложный';
}
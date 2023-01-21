import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { gameSliceState } from "./types";

const initialState: gameSliceState = {
    isGameOver: false,
    score: 0,
    difficulty: 'Легкий'
};

const resultSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        increaseScore(state) {
            state.score += 2;
        },
        resetGame(state) {
            state.isGameOver = false,
            state.score = 0;
        },
        updateIsGameOver(state, action: PayloadAction<boolean>) {
            state.isGameOver = action.payload;
        },
        changeDifficulty(state, action: PayloadAction<'Легкий' | 'Средний' | 'Сложный'>) {
            state.difficulty = action.payload;
        },
    }
});

const {actions, reducer} = resultSlice;

export default reducer;

export const {
    increaseScore,
    resetGame,
    updateIsGameOver,
    changeDifficulty
} = actions;
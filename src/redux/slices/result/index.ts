import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { resultSliceState } from "./types";

const initialState: resultSliceState = {
    isGameOver: false,
    score: 0
};

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        increaseScore(state) {
            state.score += 2;
        },
        updateIsGameOver(state, action: PayloadAction<boolean>) {
            state.isGameOver = action.payload;
        }
    }
});

const {actions, reducer} = resultSlice;

export default reducer;

export const {
    increaseScore,
    updateIsGameOver
} = actions;
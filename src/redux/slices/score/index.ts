import { createSlice } from "@reduxjs/toolkit";

import { scoreSliceState } from "./types";

const initialState: scoreSliceState = {
    score: 0
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increaseScore(state) {
            state.score += 2;
        }
    }
});

const {actions, reducer} = scoreSlice;

export default reducer;

export const {
    increaseScore,
} = actions;
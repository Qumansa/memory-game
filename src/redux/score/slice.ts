import { createSlice } from "@reduxjs/toolkit";

import { IScore } from "./types";

const initialState: IScore = {
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
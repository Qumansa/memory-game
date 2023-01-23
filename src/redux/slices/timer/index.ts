import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUpdateTimer, timerSliceState } from "./types";

const initialState: timerSliceState = {
    isActive: false,
    value: {
        'Легкий': 60,
        'Средний': 40,
        'Сложный': 50
    },
};

const timerSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        toggleTimer(state, action: PayloadAction<boolean>) {
            state.isActive = action.payload;
        },
        updateTimerValue(state, action: PayloadAction<IUpdateTimer>) {
            state.value[action.payload.difficulty] = action.payload.value;
        },
        resetTimer(state) {
            state.value = {
                'Легкий': 60,
                'Средний': 40,
                'Сложный': 50
            };
        },
    }
});

const {actions, reducer} = timerSlice;

export default reducer;

export const {
    updateTimerValue,
    toggleTimer,
    resetTimer
} = actions;
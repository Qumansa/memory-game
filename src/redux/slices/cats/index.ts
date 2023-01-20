import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

import { Cat, catsSliceState } from "./types";

import cat1 from './assets/img/cat-1.jpg';
import cat2 from './assets/img/cat-2.jpg';
import cat3 from './assets/img/cat-3.jpg';
import cat4 from './assets/img/cat-4.jpg';
import cat5 from './assets/img/cat-5.jpg';
import cat6 from './assets/img/cat-6.jpg';

const initialState: catsSliceState = {
    amountOfCatsOpened: 0,
    areCatsDisabled: false,
    cats: [
        {
            id: uuid(),
            isActive: false,
            isFound: false,
            src: cat1,
        },
        {
            id: uuid(),
            isActive: false,
            isFound: false,
            src: cat2,
        },
        {
            id: uuid(),
            isActive: false,
            isFound: false,
            src: cat3,
        },
        {
            id: uuid(),
            isActive: false,
            isFound: false,
            src: cat4,
        },
        {
            id: uuid(),
            isActive: false,
            isFound: false,
            src: cat5,
        },
        {
            id: uuid(),
            isActive: false,
            isFound: false,
            src: cat6,
        },
        {
            id: uuid(),
            isActive: false,
            isFound: false,
            src: cat1,
        },
        {
            id: uuid(),
            isActive: false,
            isFound: false,
            src: cat2,
        },
        {
            id: uuid(),
            isActive: false,
            isFound: false,
            src: cat3,
        },
        {
            id: uuid(),
            isActive: false,
            isFound: false,
            src: cat4,
        },
        {
            id: uuid(),
            isActive: false,
            isFound: false,
            src: cat5,
        },
        {
            id: uuid(),
            isActive: false,
            isFound: false,
            src: cat6,
        },
    ],
};

export const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        updateAllCats(state, action: PayloadAction<Cat[]>) {
            state.cats = action.payload;
        },

        increaseAmountOfCatsOpened(state) {
            state.amountOfCatsOpened = state.amountOfCatsOpened + 1;
        },

        resetAmountOfCatsOpened(state) {
            state.amountOfCatsOpened = 0;
        },

        updateAreCatsDisabled(state, action: PayloadAction<boolean>) {
            state.areCatsDisabled = action.payload;
        },
    }
});

const {actions, reducer} = catsSlice;

export default reducer;

export const {
    updateAllCats,
    increaseAmountOfCatsOpened,
    resetAmountOfCatsOpened,
    updateAreCatsDisabled
} = actions;
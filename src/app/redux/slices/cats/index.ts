import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

import { catsSliceState, IUpdateCats } from "./types";

import cat1 from './assets/img/easy/cat-1.jpg';
import cat2 from './assets/img/easy/cat-2.jpg';
import cat3 from './assets/img/easy/cat-3.jpg';
import cat4 from './assets/img/easy/cat-4.jpg';
import cat5 from './assets/img/easy/cat-5.jpg';
import cat6 from './assets/img/easy/cat-6.jpg';
import cat14 from './assets/img/hard/cat-14.jpg';
import cat15 from './assets/img/hard/cat-15.jpg';
import cat16 from './assets/img/hard/cat-16.jpg';
import cat17 from './assets/img/hard/cat-17.jpg';
import cat18 from './assets/img/hard/cat-18.jpg';
import cat19 from './assets/img/hard/cat-19.jpg';
import cat20 from './assets/img/hard/cat-20.jpg';
import cat21 from './assets/img/hard/cat-21.jpg';
import cat10 from './assets/img/medium/cat-10.jpg';
import cat11 from './assets/img/medium/cat-11.jpg';
import cat12 from './assets/img/medium/cat-12.jpg';
import cat13 from './assets/img/medium/cat-13.jpg';
import cat7 from './assets/img/medium/cat-7.jpg';
import cat8 from './assets/img/medium/cat-8.jpg';
import cat9 from './assets/img/medium/cat-9.jpg';

const initialState: catsSliceState = {
    amountOfCatsOpened: 0,
    areCatsDisabled: false,
    cats: {
        'Легкий': [
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
        'Средний': [
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat7,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat8,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat9,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat10,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat11,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat12,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat13,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat7,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat8,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat9,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat10,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat11,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat12,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat13,
            },
        ],
        'Сложный': [
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat14,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat15,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat16,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat17,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat18,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat19,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat20,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat21,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat14,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat15,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat16,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat17,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat18,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat19,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat20,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: cat21,
            },
        ]
    },
};

export const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        updateAllCats(state, action: PayloadAction<IUpdateCats>) {
            state.cats[action.payload.difficulty] = action.payload.cats;
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
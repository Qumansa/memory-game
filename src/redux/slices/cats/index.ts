import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

import { catsSliceState, IUpdateCats } from "./types";

import easyCat1 from './assets/img/easy/cat-1.jpg';
import easyCat2 from './assets/img/easy/cat-2.jpg';
import easyCat3 from './assets/img/easy/cat-3.jpg';
import easyCat4 from './assets/img/easy/cat-4.jpg';
import easyCat5 from './assets/img/easy/cat-5.jpg';
import easyCat6 from './assets/img/easy/cat-6.jpg';
// import hardCat1 from './assets/img/hard/cat-1.jpg';
// import hardCat2 from './assets/img/hard/cat-2.jpg';
// import hardCat3 from './assets/img/hard/cat-3.jpg';
// import hardCat4 from './assets/img/hard/cat-4.jpg';
// import hardCat5 from './assets/img/hard/cat-5.jpg';
// import hardCat6 from './assets/img/hard/cat-6.jpg';
// import mediumCat1 from './assets/img/medium/cat-1.jpg';
// import mediumCat2 from './assets/img/medium/cat-2.jpg';
// import mediumCat3 from './assets/img/medium/cat-3.jpg';
// import mediumCat4 from './assets/img/medium/cat-4.jpg';
// import mediumCat5 from './assets/img/medium/cat-5.jpg';
// import mediumCat6 from './assets/img/medium/cat-6.jpg';

const initialState: catsSliceState = {
    amountOfCatsOpened: 0,
    areCatsDisabled: false,
    cats: {
        'Легкий': [
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat1,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat2,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat3,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat4,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat5,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat6,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat1,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat2,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat3,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat4,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat5,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat6,
            },
        ],
        'Средний': [
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat1,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat2,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat3,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat4,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat5,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat6,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat1,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat2,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat3,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat4,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat5,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat6,
            },
        ],
        'Сложный': [
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat1,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat2,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat3,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat4,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat5,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat6,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat1,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat2,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat3,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat4,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat5,
            },
            {
                id: uuid(),
                isActive: false,
                isFound: false,
                src: easyCat6,
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
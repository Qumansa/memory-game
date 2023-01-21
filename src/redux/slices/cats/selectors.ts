import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

export const selectCats = (state: RootState, action: PayloadAction<'Легкий' | 'Средний' | 'Сложный'>) => state.cats.cats[action.payload];
export const selectAmountOfCatsOpened = (state: RootState) => state.cats.amountOfCatsOpened;
export const selectAreCatsDisabled = (state: RootState) => state.cats.areCatsDisabled;
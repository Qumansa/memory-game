import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

import { DifficultyType } from "../../../types/difficulty";

export const selectCats = (state: RootState, action: PayloadAction<DifficultyType>) => state.cats.cats[action.payload];
export const selectAmountOfCatsOpened = (state: RootState) => state.cats.amountOfCatsOpened;
export const selectAreCatsDisabled = (state: RootState) => state.cats.areCatsDisabled;
import { RootState } from "../..";

export const selectCats = (state: RootState) => state.cats.cats;
export const selectAmountOfCatsOpened = (state: RootState) => state.cats.amountOfCatsOpened;
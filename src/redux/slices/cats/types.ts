export type Cat = {
    id: string;
    isActive: boolean;
    isFound: boolean;
    src: string;
}

export interface catsSliceState {
    amountOfCatsOpened: number;
    areCatsDisabled: boolean;
    cats: Cat[];
};
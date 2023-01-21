import { DifficultyType } from "../../../types/difficulty";

export type CatType = {
    id: string;
    isActive: boolean;
    isFound: boolean;
    src: string;
}

export interface catsSliceState {
    amountOfCatsOpened: number;
    areCatsDisabled: boolean;
    cats: {
        'Легкий': CatType[],
        'Средний': CatType[],
        'Сложный': CatType[]
    };
};

export interface IUpdateCats {
    difficulty: DifficultyType;
    cats: CatType[];
};
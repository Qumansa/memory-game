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
    difficulty: 'Легкий' | 'Средний' | 'Сложный';
    cats: CatType[];
};
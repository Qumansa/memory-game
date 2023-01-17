import uuid from 'react-uuid';

import { ICatImages } from './types';

import cat1 from '../assets/img/cats/cat-1.jpg';
import cat2 from '../assets/img/cats/cat-2.jpg';
import cat3 from '../assets/img/cats/cat-3.jpg';
import cat4 from '../assets/img/cats/cat-4.jpg';
import cat5 from '../assets/img/cats/cat-5.jpg';
import cat6 from '../assets/img/cats/cat-6.jpg';

export const catImages: ICatImages[] = [
    {
        id: uuid(),
        src: cat1,
    },
    {
        id: uuid(),
        src: cat2,
    },
    {
        id: uuid(),
        src: cat3,
    },
    {
        id: uuid(),
        src: cat4,
    },
    {
        id: uuid(),
        src: cat5,
    },
    {
        id: uuid(),
        src: cat6,
    },
    {
        id: uuid(),
        src: cat1,
    },
    {
        id: uuid(),
        src: cat2,
    },
    {
        id: uuid(),
        src: cat3,
    },
    {
        id: uuid(),
        src: cat4,
    },
    {
        id: uuid(),
        src: cat5,
    },
    {
        id: uuid(),
        src: cat6,
    },
];
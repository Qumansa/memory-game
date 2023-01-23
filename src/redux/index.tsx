import { configureStore } from '@reduxjs/toolkit';

import cats from './slices/cats';
import game from './slices/game';
import timer from './slices/timer';

export const store = configureStore({
	reducer: {
		game,
		cats,
		timer,
	},
	// devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

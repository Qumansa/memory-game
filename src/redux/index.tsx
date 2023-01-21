import { configureStore } from '@reduxjs/toolkit';

import cats from './slices/cats';
import game from './slices/game';

export const store = configureStore({
	reducer: {
		game,
		cats,
	},
	// devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

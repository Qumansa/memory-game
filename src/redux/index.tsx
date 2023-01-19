import { configureStore } from '@reduxjs/toolkit';

import cats from './slices/cats';
import score from './slices/score';

export const store = configureStore({
	reducer: {
		score,
		cats,
	},
	// devTools: process.env.NODE_ENV !== 'production',
});

// типизация dispatch()
export type AppDispatch = typeof store.dispatch;

// типизация главного глобального state
export type RootState = ReturnType<typeof store.getState>;

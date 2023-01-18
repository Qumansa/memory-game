import { configureStore } from '@reduxjs/toolkit';

import score from './score/slice';

export const store = configureStore({
	reducer: {
		score,
	},
	// devTools: process.env.NODE_ENV !== 'production',
});

// типизация dispatch()
export type AppDispatch = typeof store.dispatch;

// типизация главного глобального state
export type RootState = ReturnType<typeof store.getState>;

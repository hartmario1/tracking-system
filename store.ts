import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './features/tokenSlice';
import logger from 'redux-logger';

export const store = configureStore({
	reducer: {
		token: tokenSlice
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

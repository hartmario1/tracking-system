import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tokenSlice from './features/tokenSlice';
import logger from 'redux-logger';
import userIdSlice from './features/userIdSlice';
import internSlice from './features/internSlice';
import internIdSlice from './features/internIdSlice';
import taskSlice from './features/taskSlice';

const reducer = combineReducers({
	token: tokenSlice,
	userId: userIdSlice,
	intern: internSlice,
	internId: internIdSlice,
	task: taskSlice
});

export const store = configureStore({
	reducer: reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

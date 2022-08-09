import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tokenSlice from './features/tokenSlice';
import logger from 'redux-logger';
import userIdSlice from './features/userIdSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
}
const reducer = combineReducers({
	token: tokenSlice,
	userId: userIdSlice
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
function timeout(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
export const awaitRehydrate = async (): Promise<boolean> => {
	const state = store.getState()
	if (!state._persist.rehydrated) {
		console.log('not Rehydrate')
		await timeout(10)
		return awaitRehydrate()
	} else {
		console.log('Rehydrate')
		return true
	}
}
export let persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

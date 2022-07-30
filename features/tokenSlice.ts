import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface TokenState {
	token: null;
}

const initialState: TokenState = {token: null};

const tokenSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		setToken: (state: any, action: any) => {
			state.token = action.payload;
		}
	}
});

export const {setToken} = tokenSlice.actions;
export const getTokenId = (state: RootState) => state.token.token;
export default tokenSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UserIdState {
	userId: null;
}

const initialState: UserIdState = {userId: null};

const userIdSlice = createSlice({
	name: 'userId',
	initialState,
	reducers: {
		setUserId: (state: any, action: any) => {
			state.userId = action.payload;
		}
	}
});

export const { setUserId } = userIdSlice.actions;
export const getUserId = (state: RootState) => state.userId.userId;
export default userIdSlice.reducer;

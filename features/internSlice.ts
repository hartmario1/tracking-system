import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface InternState {
	intern: null;
}

const initialState: InternState = {intern: null};

const internSlice = createSlice({
	name: 'intern',
	initialState,
	reducers: {
		setIntern: (state: any, action: any) => {
			state.intern = action.payload;
		}
	}
});

export const { setIntern } = internSlice.actions;
export const getIntern = (state: RootState) => state.intern.intern;
export default internSlice.reducer;

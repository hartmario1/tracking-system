import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface InternIdState {
	internId: null;
}

const initialState: InternIdState = {internId: null};

const internIdSlice = createSlice({
	name: 'internId',
	initialState,
	reducers: {
		setInternId: (state: any, action: any) => {
			state.internId = action.payload;
		}
	}
});

export const { setInternId } = internIdSlice.actions;
export const getInternId = (state: RootState) => state.internId.internId;
export default internIdSlice.reducer;

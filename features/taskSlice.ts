import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface TaskState {
	task: null;
}

const initialState: TaskState = {task: null};

const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		setTask: (state: any, action: any) => {
			state.task = action.payload;
		}
	}
});

export const { setTask } = taskSlice.actions;
export const getTask = (state: RootState) => state.task.task;
export default taskSlice.reducer;

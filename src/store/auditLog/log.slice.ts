import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@store';

const initialState: { data: IInitialStateValues[] } = {
	data: [],
};
const slice = createSlice({
	name: 'logs',
	initialState,
	reducers: {
		addLog: (state, action: PayloadAction<IInitialStateValues>) => {
			state.data.push(action.payload);
		},
	},
});

export default slice.reducer;

export const { addLog } = slice.actions;

export const getLogsState = (state: AppState): typeof initialState => state.logs;

interface IInitialStateValues {
	siteId: string;
	userName: string;
	name: string;
	region: string;
	siteDescription: string;
	latitude: string;
	longitude: string;
	time: string;
}

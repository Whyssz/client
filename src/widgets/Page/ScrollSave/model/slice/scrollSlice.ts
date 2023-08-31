import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types/scrollSave.types';

const initialState: ScrollSchema = {
	scroll: {},
};

const scrollSlice = createSlice({
	name: 'scrollPage',
	initialState,
	reducers: {
		setScrollPosition: (
			state,
			{ payload }: PayloadAction<{ path: string; position: number }>
		) => {
			state.scroll[payload.path] = payload.position;
		},
	},
});

export const { reducer: scrollReducer, actions: scrollActions } =
	scrollSlice;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
	isLoading: false,
	data: undefined,
	error: undefined,
	readonly: true,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProfileData.pending, state => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchProfileData.fulfilled,
				(state, action: PayloadAction<Profile>) => {
					state.isLoading = false;
					state.data = action.payload;
				}
			)
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

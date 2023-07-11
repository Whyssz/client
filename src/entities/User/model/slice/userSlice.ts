import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user.interface';

const initialState: UserSchema = {};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {},
});

export const { actions: userActions, reducer: userReducer } =
	userSlice;

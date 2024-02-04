import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState, UserModel } from '../models/user_model'

const initialState: AuthState = (() => {
	const persitedState = localStorage.getItem('reduxState')
	if (persitedState) {
		const data = JSON.parse(persitedState) as AuthState
		if (data.user !== null) return data
	}
	return {
		error: '',
		isLoading: false,
		user: null,
	}
})()

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		request: (state): AuthState => {
			return {
				...state,
				isLoading: true,
				user: null,
			}
		},
		success: (state, action: PayloadAction<UserModel>): AuthState => {
			return {
				...state,
				isLoading: false,
				user: action.payload,
				error: '',
			}
		},
		fail: (state, action: PayloadAction<string>): AuthState => {
			return {
				...state,
				isLoading: false,
				user: null,
				error: action.payload,
			}
		},
		logout: (state): AuthState => {
			return {
				...state,
				isLoading: false,
				user: null,
				error: '',
			}
		},
	},
})

export const { request, success, fail, logout } = userSlice.actions

export default userSlice.reducer

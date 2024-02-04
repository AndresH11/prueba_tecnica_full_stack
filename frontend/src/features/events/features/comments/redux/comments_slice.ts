import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CommentInterface, CommentState } from '../models/comment_model'

const initialState: CommentState = { comments: [], loading: false }

export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		request(state) {
			return {
				...state,
				loading: true,
			}
		},
		allComment: (
			state,
			action: PayloadAction<CommentInterface[]>
		): CommentState => {
			return {
				...state,
				comments: action.payload,
				loading: false,
			}
		},
		fail(state) {
			return {
				...state,
				loading: false,
			}
		},

		addComment(state, action: PayloadAction<CommentInterface>) {
			state.comments.unshift(action.payload as never)
			return state
		},
	},
})

export const { allComment, request, fail, addComment } = commentsSlice.actions

export default commentsSlice.reducer

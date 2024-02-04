import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MyEventState, MyEventInterface } from '../models/my_events_model'

const initialState: MyEventState = { events: [], loading: false }

export const myEventSlice = createSlice({
	name: 'Myevent',
	initialState,
	reducers: {
		request(state) {
			return {
				...state,
				loading: true,
			}
		},
		allMyEvents: (
			state,
			action: PayloadAction<MyEventInterface[]>
		): MyEventState => {
			return {
				...state,
				events: action.payload,
				loading: false,
			}
		},
		fail(state) {
			return {
				...state,
				loading: false,
			}
		},
		removeEvents(state, action: PayloadAction<number>) {
			state.events = state.events.filter(
				event => event.event.id !== action.payload
			)!
			return state
		},
	},
})

export const { allMyEvents, request, fail, removeEvents } = myEventSlice.actions

export default myEventSlice.reducer

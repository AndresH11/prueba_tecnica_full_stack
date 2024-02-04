import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { EventInterface, EventState } from '../models/event_model'

const initialState: EventState = { events: [], loading: false }

export const finishedEventSlice = createSlice({
	name: 'eventFinifhed',
	initialState,
	reducers: {
		request(state) {
			return {
				...state,
				loading: true,
			}
		},
		allEvents: (state, action: PayloadAction<EventInterface[]>): EventState => {
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
		quitOneCup(state, action: PayloadAction<number>) {
			const index = state.events.findIndex(event => event.id === action.payload)
			const event = state.events.find(event => event.id === action.payload)!

			state.events[index] = {
				...event,
				availableCups: event.availableCups - 1,
			}

			return state
		},

		addOneCup(state, action: PayloadAction<number>) {
			const index = state.events.findIndex(event => event.id === action.payload)
			const event = state.events.find(event => event.id === action.payload)!

			state.events[index] = {
				...event,
				availableCups: event.availableCups + 1,
			}

			return state
		},
	},
})

export const { allEvents, request, fail, quitOneCup, addOneCup } =
	finishedEventSlice.actions

export default finishedEventSlice.reducer

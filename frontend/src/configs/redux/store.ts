import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../features/auth/redux/user_slice'
import eventReducer from '../../features/events/redux/event_slice'
import myEventReducer from '../../features/myEvents/redux/my_event_slice'
import finishedEventReducer from '../../features/events/redux/finished_event_slice'
import commentsReducer from '../../features/events/features/comments/redux/comments_slice'

const persistanceMiddleware =
	(store: { getState: () => any }) =>
	(next: (arg0: any) => void) =>
	(action: any) => {
		next(action)
		localStorage.setItem('reduxState', JSON.stringify(store.getState().user))
	}

export const store = configureStore({
	reducer: {
		user: userReducer,
		event: eventReducer,
		finishedEvents: finishedEventReducer,
		myEvents: myEventReducer,
		comments: commentsReducer,
	},
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware().concat(persistanceMiddleware)
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

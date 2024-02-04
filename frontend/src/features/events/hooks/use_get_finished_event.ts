import { useLazyQuery } from '@apollo/client'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { allEvents, request, fail } from '../redux/finished_event_slice'
import toast from 'react-hot-toast'
import { GET_EVENTS_FINISHED } from '../graphql/queries/get_events_finished'

export const useGetFinishedEvent = () => {
	const dispatch = useAppDispatch()
	const events = useAppSelector(state => state.event.events)
	const [getFinishedEvents] = useLazyQuery(GET_EVENTS_FINISHED)

	const getFinishedEvent = async () => {
		dispatch(request())
		try {
			const { data } = await getFinishedEvents()
			if (data.getFinishedEvents.error) {
				toast.error(data.getFinishedEvents.error)
				dispatch(fail())
				return
			}
			if (events.length > 0) return
			dispatch(allEvents(data.getFinishedEvents.data))
			return
		} catch (error) {
			toast.error('Hubo un error')
		}
	}

	return { getFinishedEvent }
}

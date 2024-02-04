import { useLazyQuery } from '@apollo/client'
import { getAllEvents } from '../graphql/queries/get_all_events'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { allEvents, request, fail } from '../redux/event_slice'
import toast from 'react-hot-toast'

export const useGetAllEvents = () => {
	const dispatch = useAppDispatch()
	const events = useAppSelector(state => state.event.events)
	const [get] = useLazyQuery(getAllEvents)

	const getAllEvent = async () => {
		dispatch(request())
		try {
			const { data } = await get()
			if (data.getEvents.error) {
				toast.error(data.getEvents.error)
				dispatch(fail())
				return
			}
			if (events.length > 0) return
			dispatch(allEvents(data.getEvents.data))
			return
		} catch (error) {
			toast.error('Hubo un error')
		}
	}

	return { getAllEvent }
}

import { useMutation } from '@apollo/client'
import { useAppDispatch } from '../../../store/store'
import toast from 'react-hot-toast'
import { fail, removeEvents } from '../redux/my_event_slice'
import { REMOVE_USER_EVENT_BY_ID_EVENT } from '../graphql/mutation/my_events_mutation'

export const useRemoveMyEvents = () => {
	const dispatch = useAppDispatch()
	const [removeMutation] = useMutation(REMOVE_USER_EVENT_BY_ID_EVENT)

	const removeMyEvent = async ({
		eventId,
		userEventId,
	}: {
		eventId: number
		userEventId: number
	}) => {
		toast.loading('Cargando...', { duration: 1000 })
		try {
			const { data } = await removeMutation({
				variables: { eventId, userEventId },
			})
			if (data.removeUserEventsByIdEvent.error) {
				toast.error(data.removeUserEventsByIdEvent.error)
				dispatch(fail())
				return
			}
			dispatch(removeEvents(eventId))
			toast.success('Opreació realizada con exito')
			return
		} catch (error) {
			toast.error('Hubo un error')
		}
	}

	return { removeMyEvent }
}

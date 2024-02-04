import { useLazyQuery } from '@apollo/client'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import toast from 'react-hot-toast'
import { GET_ALL_MY_EVENTS } from '../graphql/queries/my_events_query'
import { request, fail, allMyEvents } from '../redux/my_event_slice'

export const useGetAllMyEvents = () => {
	const dispatch = useAppDispatch()
	const user = useAppSelector(state => state.user.user)

	const [get] = useLazyQuery(GET_ALL_MY_EVENTS, { fetchPolicy: 'no-cache' })

	const getAllMyEvent = async () => {
		dispatch(request())
		try {
			const { data } = await get({ variables: { userId: user?.id } })
			if (data.getUserEventsByIdUser.error) {
				toast.error(data.getUserEventsByIdUser.error)
				dispatch(fail())
				return
			}
			dispatch(allMyEvents(data.getUserEventsByIdUser.data))
			return
		} catch (error) {
			toast.error('Hubo un error')
		}
	}

	return { getAllMyEvent }
}

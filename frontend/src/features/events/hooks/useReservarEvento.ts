import { useMutation } from '@apollo/client'
import { RESERVAR_EVENTO } from '../graphql/mutations/reservar_mutation'
import toast from 'react-hot-toast'
import { useAppDispatch } from '../../../store/store'
import { quitOneCup } from '../redux/event_slice'

export const useReservarEvento = () => {
	const [reservarMutation] = useMutation(RESERVAR_EVENTO)
	const dispatch = useAppDispatch()

	const reservar = async ({
		eventId,
		userId,
	}: {
		eventId: number
		userId?: number
	}) => {
		if (!userId)
			return toast.error('Debes estar logueado para poder reservar un cupo')

		toast.loading('Cargando...', { duration: 1000 })
		try {
			await reservarMutation({
				variables: { userId, eventId },
			})

			dispatch(quitOneCup(eventId))
			return toast.success('Se ha reservado el evento de forma exitosa')
		} catch (error) {
			return toast.error('Hubo un error')
		}
	}

	return { reservar }
}

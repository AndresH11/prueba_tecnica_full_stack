import { useLazyQuery } from '@apollo/client'
import { useAppDispatch } from '../../../../../store/store'
import { allComment, request, fail } from '../redux/comments_slice'
import toast from 'react-hot-toast'
import { GET_COMMENTS } from '../graphql/queries/get_comments'

export const useComments = () => {
	const dispatch = useAppDispatch()
	const [getComments] = useLazyQuery(GET_COMMENTS, { fetchPolicy: 'no-cache' })

	const getComment = async (eventId: number) => {
		dispatch(request())
		try {
			const { data } = await getComments({ variables: { eventId } })
			if (data.getCommentByEvent.error) {
				toast.error(data.getCommentByEvent.error)
				dispatch(fail())
				return
			}

			dispatch(allComment(data.getCommentByEvent.data))
			return
		} catch (error) {
			toast.error('Hubo un error')
		}
	}

	return { getComment }
}

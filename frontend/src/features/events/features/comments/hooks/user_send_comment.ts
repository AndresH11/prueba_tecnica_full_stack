import { useMutation } from '@apollo/client'
import { useAppDispatch } from '../../../../../store/store'
import { request, fail, addComment } from '../redux/comments_slice'
import toast from 'react-hot-toast'
import { SEND_COMMENT } from '../graphql/mutations/comment_mutation'

interface Comment {
	comment: string
	userId: number
	eventId: number
}

export const useSendComment = () => {
	const dispatch = useAppDispatch()
	const [sendCommnet] = useMutation(SEND_COMMENT)

	const sendComment = async ({ eventId, userId, comment }: Comment) => {
		dispatch(request())
		try {
			const { data } = await sendCommnet({
				variables: { eventId, userId, comment },
			})
			if (data.createComment.error) {
				toast.error(data.createComment.error)
				dispatch(fail())
				return
			}
			dispatch(addComment(data.createComment.data))
			toast.success('Se ha enviado el comentario de forma exitosa')
			return
		} catch (error) {
			toast.error('Hubo un error')
		}
	}

	return { sendComment }
}

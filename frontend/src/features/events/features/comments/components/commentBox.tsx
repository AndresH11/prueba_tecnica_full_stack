import { Textarea } from 'flowbite-react'
import { Form } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	CreateCommentSchema,
	TCreateCommentSchema,
} from '../validations/comment_validation'
import { useSendComment } from '../hooks/user_send_comment'
import toast from 'react-hot-toast'

export const CommentBox = ({
	eventId,
	userId,
}: {
	eventId: number
	userId: number
}) => {
	const { sendComment } = useSendComment()
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<TCreateCommentSchema>({
		resolver: zodResolver(CreateCommentSchema),
		defaultValues: {
			comment: '',
		},
	})

	if (errors.comment?.message) toast.error(errors.comment.message)

	const envia = (props: TCreateCommentSchema) => {
		if (!(userId && eventId))
			return toast.error('Debes estar logueado para poder enviar mensajes')
		reset()
		sendComment({ eventId, userId, comment: props.comment })
		return
	}
	return (
		<Form onSubmit={handleSubmit(envia)}>
			<div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
				<div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
					<label htmlFor="comment" className="sr-only">
						Your comment
					</label>
					<Textarea
						{...register('comment')}
						id="comment"
						rows={4}
						className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
						placeholder="Write a comment..."
						required
					/>
				</div>
				<div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
					<button
						type="submit"
						className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
						Post comment
					</button>
				</div>
			</div>
		</Form>
	)
}

import { gql } from '@apollo/client'

export const SEND_COMMENT = gql`
	mutation CreateComment($comment: String!, $userId: Float!, $eventId: Float!) {
		createComment(comment: $comment, userId: $userId, eventId: $eventId) {
			data {
				id
				comment
				date
				user {
					nickName
				}
			}
			error
		}
	}
`

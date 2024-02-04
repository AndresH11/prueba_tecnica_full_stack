import { gql } from '@apollo/client'

export const GET_COMMENTS = gql`
	query getCommentByEvent($eventId: Float!) {
		getCommentByEvent(eventId: $eventId) {
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

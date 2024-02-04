import { gql } from '@apollo/client'

export const RESERVAR_EVENTO = gql`
	mutation Reservar($userId: Float!, $eventId: Float!) {
		createUserEvent(userId: $userId, eventId: $eventId) {
			data {
				id
				event {
					id
					name
					date
					imagePath
					description
					totalCups
					availableCups
					comments {
						comment
					}
				}
			}
			error
		}
	}
`

import { gql } from '@apollo/client'

export const GET_ALL_MY_EVENTS = gql`
	query GetUserEventsByIdUser($userId: Float!) {
		getUserEventsByIdUser(userId: $userId) {
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

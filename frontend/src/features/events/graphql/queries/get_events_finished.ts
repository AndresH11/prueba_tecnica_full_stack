import { gql } from '@apollo/client'

export const GET_EVENTS_FINISHED = gql`
	query {
		getFinishedEvents {
			data {
				id
				name
				description
				date
				totalCups
				status
				availableCups
				imagePath
			}
			error
		}
	}
`

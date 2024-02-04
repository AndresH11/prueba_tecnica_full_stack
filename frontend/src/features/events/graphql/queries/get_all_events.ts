import { gql } from '@apollo/client'

export const getAllEvents = gql`
	query {
		getEvents {
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

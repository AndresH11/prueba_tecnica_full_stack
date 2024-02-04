import { gql } from '@apollo/client'

export const REMOVE_USER_EVENT_BY_ID_EVENT = gql`
	mutation removeUserEventsByIdEvent($eventId: Float!, $userEventId: Float!) {
		removeUserEventsByIdEvent(eventId: $eventId, userEventId: $userEventId) {
			data
			error
		}
	}
`

export interface EventInterface {
	id: number
	name: string
	date: string
	description: string
	status: number
	totalCups: number
	availableCups: number
	imagePath: string
}

export interface EventState {
	loading: boolean
	events: EventInterface[] | []
}

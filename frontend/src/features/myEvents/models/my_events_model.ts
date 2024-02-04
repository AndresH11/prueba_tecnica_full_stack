export interface MyEventInterface {
	id: number
	event: {
		id: number
		name: string
		date: string
		description: string
		status: number
		totalCups: number
		availableCups: number
		imagePath: string
	}
}

export interface MyEventState {
	loading: boolean
	events: MyEventInterface[] | []
}

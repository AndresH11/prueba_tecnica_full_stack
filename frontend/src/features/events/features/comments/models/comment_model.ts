export interface CommentInterface {
	id: number
	date: string
	comment: string
	user: {
		nickName: string
	}
}

export interface CommentState {
	loading: boolean
	comments: CommentInterface[] | []
}

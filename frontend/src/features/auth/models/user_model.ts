export interface UserModel {
	id: number
	nickname: string
	email: string
	date: string
}

export interface AuthState {
	isLoading: boolean
	error?: string
	user: UserModel | null
}

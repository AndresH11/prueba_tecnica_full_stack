import { gql } from '@apollo/client'

export const CREATE_USER_GRAPHQL = gql`
	mutation CreateUser($nickName: String!, $email: String!, $password: String!) {
		createUser(nickName: $nickName, email: $email, password: $password) {
			data {
				id
				nickName
				email
				date
			}
			error
		}
	}
`

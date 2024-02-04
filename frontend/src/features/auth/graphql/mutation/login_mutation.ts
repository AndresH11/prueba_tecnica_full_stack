import { gql } from '@apollo/client'

export const LOGIN_GRAPHQL = gql`
	mutation Auth($email: String!, $password: String!) {
		auth(email: $email, password: $password) {
			error
			data {
				id
				nickName
				email
				password
				date
			}
		}
	}
`

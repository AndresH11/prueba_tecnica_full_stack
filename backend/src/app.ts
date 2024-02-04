import { ApolloServer } from 'apollo-server-express'
import { CommentResolver } from './comments/resolvers/comment_resolver'
import { EventResolver } from './event/resolvers/event_resolvers'
import { UserEventResolver } from './customs/resolvers/user_event_resolver'
import { UserResolver } from './users/resolvers/user_resolver'
import { buildSchema } from 'type-graphql'
import cors from 'cors'
import express from 'express'
//import helmet from 'helmet'

export const startServer = async () => {
	const app = express()

	//Middleware
	//app.use(helmet())
	app.use(cors({ origin: ['http://localhost:5173'] }))

	const server = new ApolloServer({
		schema: await buildSchema({
			resolvers: [
				UserResolver,
				EventResolver,
				CommentResolver,
				UserEventResolver,
			],
		}),
		context: ({ req, res }) => ({ req, res }),
	})

	server.applyMiddleware({ app, path: '/graphql' })

	return app
}

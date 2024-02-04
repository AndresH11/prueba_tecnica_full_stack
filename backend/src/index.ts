import 'reflect-metadata'
import { connect } from './config/typeorm'
import { startServer } from './app'

const main = async () => {
	try {
		connect()
		const server = await startServer()
		server.listen(3000)
		console.log(`Server listening on ${3000}`)
	} catch (error) {
		console.log(error)
	}
}

main()

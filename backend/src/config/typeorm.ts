import { DataSource } from 'typeorm'
import { join } from 'node:path'

export const connect = async () => {
	const dataSource = new DataSource({
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		synchronize: true,
		username: 'username',
		password: 'password',
		database: 'events',
		entities: [
			join(__dirname, '../users/entities/**/**.ts'),
			join(__dirname, '../event/entities/**/**.ts'),
			join(__dirname, '../comments/entities/**/**.ts'),
			join(__dirname, '../customs/entities/**/**.ts'),
		],
	})

	await dataSource.initialize()
	console.log('Base de datos conectada')
}

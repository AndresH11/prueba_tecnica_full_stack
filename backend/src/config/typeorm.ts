import { DataSource } from 'typeorm'
import { join } from 'node:path'

export const connect = async () => {
	const dataSource = new DataSource({
		type: 'postgres', // DEJARLO ASÍ
		host: 'localhost', // DEJARLO ASÍ
		port: 5432, // ACA DEBES COLOCAR EL PUERTO DONDE SE HABILITA LA DB, EN MI CASO ES EL PUERTO 5432, PERO EN TU CASO PUEDE CAMBIAR
		synchronize: true, // DEJARLO ASÍ
		username: 'postgres', // DEBES COLOCAR TU NOMEBRE DE USUARIO QUE TIENES REGISTRADO
		password: 'andres123', // SI TIENES CONTRASEÑA COLOCARLA, DE LO CONTRARIO DEJARLO VACIO
		database: 'events', // DEBES CREAR UNA DB CON EL NOMBRE event
		entities: [
			join(__dirname, '../users/entities/**/**.{ts,js}'),
			join(__dirname, '../event/entities/**/**.{ts,js}'),
			join(__dirname, '../comments/entities/**/**.{ts,js}'),
			join(__dirname, '../customs/entities/**/**.{ts,js}'),
		],
	})

	await dataSource.initialize()
	console.log('Base de datos conectada')
}

import { STATUS_EVENT } from '../event/constants/status_event'

export const mocks = [
	{
		imagePath:
			'https://media.tycsports.com/files/2022/07/19/454313/fifa-23-portada_1440x810_wmk.webp',
		name: 'Fifa',
		description: 'Es un juego de futbol',
		totalCups: 15,
		status: STATUS_EVENT.await,
	},
	{
		imagePath:
			'https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2022/8/1/ksfga6rlx2ugfhjd9vnk/league-of-legends',
		name: 'League of Legend',
		description: 'Es un juego de estrategia',
		totalCups: 19,
		status: STATUS_EVENT.await,
	},
	{
		imagePath:
			'https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2015/10/23/0668DF99-DCFE-4EA2-9890-E6816E991DD1/98.jpg?crop=1109,624,x128,y0&width=1900&height=1069&optimize=high&format=webply',
		name: 'Clash of clans',
		description: 'Es un juego de estrategia y muy chevere',
		totalCups: 20,
		status: STATUS_EVENT.await,
	},
	{
		imagePath:
			'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/22/15532758622351.jpg',
		name: 'Brawl stars',
		description: 'Es un juego para disfrutar con tus amigos',
		totalCups: 25,
		status: STATUS_EVENT.await,
	},
	{
		imagePath:
			'https://news.microsoft.com/wp-content/uploads/prod/sites/61/2015/04/Halo-5.jpg',
		name: 'Halo 5',
		description: 'Es un gran juego, marcó toda una generación',
		totalCups: 50,
		status: STATUS_EVENT.await,
	},
	{
		imagePath:
			'https://www.nintenderos.com/wp-content/uploads/2011/04/20110413_00099.jpg',
		name: 'Zelda ocarina of time',
		description: 'Es un juego de aventura',
		totalCups: 10,
		status: STATUS_EVENT.await,
	},
	{
		imagePath:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyAJF4mxou5ageJf6lDUIRcpS-upCMjPFAw&usqp=CAU',
		name: 'God of war',
		description: 'Es un juego de accion',
		totalCups: 30,
		status: STATUS_EVENT.finished,
	},
	{
		imagePath:
			'https://media.vandal.net/m/53183/fortnite-battle-royale-2017103123312_1.jpg',
		name: 'Fornite',
		description:
			'Es de supervivencia, el ultimo en pie se consagra como ganador',
		totalCups: 100,
		status: STATUS_EVENT.finished,
	},
]

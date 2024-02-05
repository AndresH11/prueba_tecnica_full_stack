import { Arg, Field, Mutation, ObjectType, Query, Resolver } from 'type-graphql'
import { EventEntity } from '../entities/event_entity'
import { STATUS_EVENT } from '../constants/status_event'
import { mocks } from '../../mocks/events_mock'

@ObjectType()
class ResponseEvent {
	@Field(() => [EventEntity], { nullable: true })
	data?: EventEntity

	@Field(() => String, { nullable: true })
	error?: string
}

@ObjectType()
class ResponseCreateEvent {
	@Field(() => String, { nullable: true })
	data?: string

	@Field(() => String, { nullable: true })
	error?: string
}

@ObjectType()
@Resolver()
export class EventResolver {
	@Mutation(() => ResponseCreateEvent)
	async createEvent() {
		try {
			mocks.forEach(async mock => {
				await EventEntity.save({
					imagePath: mock.imagePath,
					name: mock.name,
					description: mock.description,
					totalCups: mock.totalCups,
					availableCups: mock.totalCups,
					status: mock.status,
					date: `${new Date().getTime()}`,
				})
			})
			return { data: 'Se ha creado el evento de forma exitosa' }
		} catch (error) {
			return { error: 'Hubo un error' }
		}
	}

	@Mutation(() => ResponseCreateEvent)
	async updateEvent(
		@Arg('id') id: number,
		@Arg('status', { nullable: true }) status: number,
		@Arg('availableCups', { nullable: true }) availableCups: number
	) {
		try {
			await EventEntity.update(id, { status, availableCups })
			return { data: 'Se ha creado el evento de forma exitosa' }
		} catch (error) {
			return { error: 'Hubo un error' }
		}
	}

	@Query(() => ResponseEvent)
	async getEvents() {
		try {
			const events = (await EventEntity.find()).filter(
				event => event.status !== STATUS_EVENT.finished
			)
			return { data: events }
		} catch (error) {
			return { error: 'Hubo un error' }
		}
	}

	@Query(() => ResponseEvent)
	async getFinishedEvents() {
		try {
			const events = await EventEntity.findBy({ status: STATUS_EVENT.finished })
			return { data: events }
		} catch (error) {
			return { error: 'Hubo un error' }
		}
	}

	/*@Query(() => Response)
	async auth(@Arg('email') email: string, @Arg('password') password: string) {
		const user = await EventEntity.findOneBy({ email })

		if (!user) return { error: 'El usuario no exite' }

		const isPasswordCorrect = await bcrypt.compare(password, user.password)
		if (!isPasswordCorrect) return { error: 'Credenciales incorrectas' }
		return { data: user }
	}*/
}

import { Arg, Field, Mutation, ObjectType, Query, Resolver } from 'type-graphql'
import { EventEntity } from '../../event/entities/event_entity'
import { UserEntity } from '../../users/entities/user_entity'
import { UserEventEntity } from '../entities/user_event.entity'

@ObjectType()
class ResponseUserEvent {
	@Field(() => [UserEventEntity], { nullable: true })
	data?: UserEventEntity

	@Field(() => String, { nullable: true })
	error?: string
}

@ObjectType()
class ResponseCreateUserEvent {
	@Field(() => UserEventEntity, { nullable: true })
	data?: UserEventEntity

	@Field(() => String, { nullable: true })
	error?: string
}

@ObjectType()
class ResponseRemoveUserEvent {
	@Field(() => String, { nullable: true })
	data?: string

	@Field(() => String, { nullable: true })
	error?: string
}

@ObjectType()
@Resolver()
export class UserEventResolver {
	@Mutation(() => ResponseCreateUserEvent)
	async createUserEvent(
		@Arg('userId') userId: number,
		@Arg('eventId') eventId: number
	) {
		try {
			const user = await UserEntity.findOneBy({ id: userId })
			const event = await EventEntity.findOneBy({ id: eventId })
			const newUserEvent = new UserEventEntity()
			newUserEvent.user = user!
			newUserEvent.event = event!
			event!.availableCups = event!.availableCups - 1
			event!.save()
			const response = await newUserEvent.save()

			const userEvents = await UserEventEntity.findOne({
				relations: { user: true, event: true },
				where: { id: response.id },
			})
			return { data: userEvents }
		} catch (error) {
			return { error: 'Ha habido un error' }
		}
	}

	@Mutation(() => ResponseRemoveUserEvent)
	async removeUserEventsByIdEvent(
		@Arg('userEventId') userEventId: number,
		@Arg('eventId') eventId: number
	) {
		try {
			await UserEventEntity.delete({ id: userEventId })
			const event = await EventEntity.findOneBy({ id: eventId })
			event!.availableCups = event!.availableCups + 1
			event!.save()
			return { data: 'Se ha eliminado de forma exitosa' }
		} catch (error) {
			return { error: 'Ha habido un error' }
		}
	}

	@Query(() => ResponseUserEvent)
	async getUserEventsByIdUser(@Arg('userId') userId: number) {
		try {
			const userEvents = await UserEventEntity.find({
				relations: { user: true, event: true },
				where: { user: { id: userId } },
			})
			return { data: userEvents }
		} catch (error) {
			return { error: 'Ha habido un error' }
		}
	}
}

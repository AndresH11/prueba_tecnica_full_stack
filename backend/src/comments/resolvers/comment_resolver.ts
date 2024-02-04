import { Arg, Field, Mutation, ObjectType, Query, Resolver } from 'type-graphql'
import { CommentEntity } from '../entities/comment_entity'
import { EventEntity } from '../../event/entities/event_entity'
import { UserEntity } from '../../users/entities/user_entity'

@ObjectType()
class ResponseComment {
	@Field(() => [CommentEntity], { nullable: true })
	data?: CommentEntity

	@Field(() => String, { nullable: true })
	error?: string
}

@ObjectType()
class ResponseCommentCreate {
	@Field(() => CommentEntity, { nullable: true })
	data?: CommentEntity

	@Field(() => String, { nullable: true })
	error?: string
}

@ObjectType()
@Resolver()
export class CommentResolver {
	@Mutation(() => ResponseCommentCreate)
	async createComment(
		@Arg('comment') comment: string,
		@Arg('userId') userId: number,
		@Arg('eventId') eventId: number
	) {
		try {
			const user = await UserEntity.findOneBy({ id: userId })
			const event = await EventEntity.findOneBy({ id: eventId })
			const newComment = new CommentEntity()

			newComment.event = event!
			newComment.user = user!
			newComment.comment = comment

			const response = await newComment.save()

			const comments = await CommentEntity.findOne({
				relations: { event: true, user: true },
				where: { id: response.id },
			})
			return { data: comments }
		} catch (error) {
			return { error: 'Hubo un error' }
		}
	}

	@Query(() => ResponseComment)
	async getCommentByEvent(@Arg('eventId') eventId: number) {
		try {
			const comments = await CommentEntity.find({
				relations: { event: true, user: true },
				where: { event: { id: eventId } },
			})
			return { data: comments }
		} catch (error) {
			return { error: 'Hubo un error' }
		}
	}
}

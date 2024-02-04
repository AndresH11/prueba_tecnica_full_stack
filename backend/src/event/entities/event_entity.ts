import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Field, Int, ObjectType } from 'type-graphql'
import { CommentEntity } from '../../comments/entities/comment_entity'
import { UserEventEntity } from '../../customs/entities/user_event.entity'

@ObjectType()
@Entity({ name: 'event' })
export class EventEntity extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id!: number

	@Field(() => String)
	@Column()
	imagePath!: string

	@Field(() => String)
	@Column()
	name!: string

	@Field(() => String)
	@Column()
	description!: string

	@Field(() => Int)
	@Column()
	totalCups!: number

	@Field(() => Int)
	@Column()
	availableCups!: number

	@Field(() => Int)
	@Column()
	status!: number

	@Field(() => String)
	@CreateDateColumn({ type: 'timestamp' })
	date!: string

	@Field(() => UserEventEntity, { nullable: true })
	@OneToMany(() => UserEventEntity, userEvent => userEvent.event)
	userEvent!: UserEventEntity[]

	@Field(() => CommentEntity, { nullable: true })
	@OneToMany(() => CommentEntity, comment => comment.event)
	comments!: CommentEntity[]
}

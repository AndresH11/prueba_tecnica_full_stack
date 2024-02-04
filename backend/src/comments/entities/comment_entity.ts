import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Field, Int, ObjectType } from 'type-graphql'
import { EventEntity } from '../../event/entities/event_entity'
import { UserEntity } from '../../users/entities/user_entity'

@ObjectType()
@Entity({ name: 'comment' })
export class CommentEntity extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id!: number

	@Field(() => String)
	@CreateDateColumn({ type: 'timestamp' })
	date!: string

	@Field(() => String)
	@Column()
	comment!: string

	@Field(() => UserEntity)
	@ManyToOne(() => UserEntity, user => user.comments)
	@JoinColumn({ name: 'user_id' })
	user!: UserEntity

	@Field(() => EventEntity)
	@ManyToOne(() => EventEntity, event => event.comments)
	@JoinColumn({ name: 'event_id' })
	event!: EventEntity
}

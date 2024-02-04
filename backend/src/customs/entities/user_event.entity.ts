import {
	BaseEntity,
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
@Entity({ name: 'user_event' })
export class UserEventEntity extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id!: number

	@Field(() => String)
	@CreateDateColumn({ type: 'timestamp' })
	date!: string

	@Field(() => UserEntity, { nullable: true })
	@ManyToOne(() => UserEntity, user => user.userEvent)
	@JoinColumn({ name: 'user_id' })
	user!: UserEntity

	@Field(() => EventEntity, { nullable: true })
	@ManyToOne(() => EventEntity, event => event.userEvent)
	@JoinColumn({ name: 'event_id' })
	event!: EventEntity
}

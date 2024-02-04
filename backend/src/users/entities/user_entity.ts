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
@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id!: number

	@Field(() => String)
	@Column()
	nickName!: string

	@Field(() => String)
	@Column()
	email!: string

	@Field(() => String)
	@Column()
	password!: string

	@Field(() => String)
	@CreateDateColumn({ type: 'timestamp' })
	date!: string

	@Field(() => UserEventEntity, { nullable: true })
	@OneToMany(() => UserEventEntity, userEvent => userEvent.user)
	userEvent!: UserEventEntity[]

	@Field(() => CommentEntity, { nullable: true })
	@OneToMany(() => CommentEntity, comment => comment.user)
	comments!: CommentEntity[]
}

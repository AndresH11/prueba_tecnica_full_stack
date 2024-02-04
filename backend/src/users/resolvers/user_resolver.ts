import { Arg, Field, Mutation, ObjectType, Resolver } from 'type-graphql'
import { UserEntity } from '../entities/user_entity'
import bcrypt from 'bcrypt'

const saltRounds = 10

@ObjectType()
class ResponseUser {
	@Field(() => UserEntity, { nullable: true })
	data?: UserEntity

	@Field(() => String, { nullable: true })
	error?: string
}

@ObjectType()
class ResponseUserCreate {
	@Field(() => UserEntity, { nullable: true })
	data?: UserEntity

	@Field(() => String, { nullable: true })
	error?: string
}

@ObjectType()
@Resolver()
export class UserResolver {
	@Mutation(() => ResponseUserCreate)
	async createUser(
		@Arg('nickName') nickName: string,
		@Arg('email') email: string,
		@Arg('password') password: string
	) {
		try {
			const passwordHash = await bcrypt.hash(password, saltRounds)

			await UserEntity.save({ nickName, email, password: passwordHash })

			const user = await UserEntity.findOneBy({ email })
			return { data: user }
		} catch (error) {
			return { error: 'Hubo un error' }
		}
	}

	@Mutation(() => ResponseUser)
	async auth(@Arg('email') email: string, @Arg('password') password: string) {
		try {
			const user = await UserEntity.findOneBy({ email })

			if (!user) return { error: 'El usuario no exite' }

			const isPasswordCorrect = await bcrypt.compare(password, user.password)
			if (!isPasswordCorrect) return { error: 'Credenciales incorrectas' }
			return { data: user }
		} catch (error) {
			return { error: 'Hubo un error' }
		}
	}
}

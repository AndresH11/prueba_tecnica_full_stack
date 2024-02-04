import { AuthLayout } from '../layout/AuthLayout'
import { Button } from '../../../components/common/button'
import { Input } from '../../../components/shared/customForm/Input'
import { Wrapper } from '../../../components/shared/Wrapper'
import { Form } from 'react-router-dom'
import {
	CreateUserSchema,
	TCreateUserSchema,
} from '../validations/auth_validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useAuth } from '../hooks/useAuth'

export const Register = () => {
	const auth = useAuth()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TCreateUserSchema>({
		resolver: zodResolver(CreateUserSchema),
		defaultValues: {
			nickName: '',
			email: '',
			password: '',
		},
	})

	return (
		<AuthLayout
			children={
				<figure>
					<img
						alt="emoticon"
						src="https://cloud.torneos.gg/media/images/avatars/16-min.png"
					/>
				</figure>
			}
			form={
				<Form
					className="space-y-4 lg:space-y-10"
					onSubmit={handleSubmit(auth.register)}>
					<Wrapper label="" title="" error={errors.nickName?.message}>
						<Input placeholder="User name" {...register('nickName')} />
					</Wrapper>
					<Wrapper label="" title="" error={errors.email?.message}>
						<Input placeholder="Email addres" {...register('email')} />
					</Wrapper>
					<Wrapper label="" title="" error={errors.password?.message}>
						<Input
							placeholder="Password"
							type="password"
							{...register('password')}
						/>
					</Wrapper>

					<Button type="submit">Sing Up</Button>
				</Form>
			}
		/>
	)
}

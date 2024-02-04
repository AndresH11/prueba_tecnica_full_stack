import { Wrapper } from '../../../components/shared/Wrapper'
import { AuthLayout } from '../layout/AuthLayout'
import { Button } from '../../../components/common/button'
import { Input } from '../../../components/shared/customForm/Input'
import { useForm } from 'react-hook-form'
import {
	LoginUserSchema,
	TLoginUserSchema,
} from '../validations/auth_validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const Login = () => {
	const { login } = useAuth()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TLoginUserSchema>({
		resolver: zodResolver(LoginUserSchema),
		defaultValues: {
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
					onSubmit={handleSubmit(login)}
					className="space-y-4 lg:space-y-10 w-2/4 place-self-center">
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

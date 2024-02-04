import { z } from 'zod'

export const CreateUserSchema = z.object({
	email: z
		.string()
		.min(1, 'El campo es requerido')
		.email('El email es invalido'),
	password: z.string().min(1, 'El campo es requerido'),
	nickName: z.string().min(1, 'El campo es requerido'),
})

export type TCreateUserSchema = z.infer<typeof CreateUserSchema>

export const LoginUserSchema = z.object({
	email: z
		.string()
		.min(1, 'El campo es requerido')
		.email('El email es invalido'),
	password: z.string().min(1, 'El campo es requerido'),
})

export type TLoginUserSchema = z.infer<typeof LoginUserSchema>

import { z } from 'zod'

export const CreateCommentSchema = z.object({
	comment: z.string().min(1, 'El campo es requerido'),
})

export type TCreateCommentSchema = z.infer<typeof CreateCommentSchema>

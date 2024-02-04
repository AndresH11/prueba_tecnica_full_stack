import { useMutation } from '@apollo/client'
import { LOGIN_GRAPHQL } from '../graphql/mutation/login_mutation'
import {
	TCreateUserSchema,
	TLoginUserSchema,
} from '../validations/auth_validation'
import { useAppDispatch } from '../../../store/store'
import { request, fail, success, logout } from '../redux/user_slice'
import toast from 'react-hot-toast'
import { CREATE_USER_GRAPHQL } from '../graphql/mutation/register_mutation'
import { useNavigate } from 'react-router-dom'
import { HOME } from '../../../constants/paths'

export const useAuth = () => {
	const [loguerMutation] = useMutation(LOGIN_GRAPHQL)
	const [createUserMutation] = useMutation(CREATE_USER_GRAPHQL)
	const navigate = useNavigate()

	const dispatch = useAppDispatch()

	const login = async (props: TLoginUserSchema) => {
		try {
			dispatch(request())
			toast.loading('Cargando...', { duration: 1000 })
			const { data } = await loguerMutation({
				variables: { email: props.email, password: props.password },
			})
			if (data.auth.error) {
				toast.error(data.auth?.error)
				dispatch(fail(data.auth?.error))
				return
			}
			toast.success('Se ha logueado de forma exitosa')
			dispatch(success(data.auth.data))
			navigate(HOME)
			return
		} catch (error) {
			toast.error('Hubo un error')
		}
	}

	const register = async (props: TCreateUserSchema) => {
		try {
			dispatch(request())
			toast.loading('Cargando...', { duration: 1000 })
			const { data } = await createUserMutation({
				variables: {
					nickName: props.nickName,
					email: props.email,
					password: props.password,
				},
			})
			if (data.createUser.error) {
				toast.error(data.createUser?.error)
				dispatch(fail(data.createUser?.error))
				return
			}
			toast.success('Se ha registrado de forma exitosa')
			dispatch(success(data.createUser.data))
			navigate(HOME)
			return
		} catch (error) {
			toast.error('Hubo un error')
		}
	}

	const loogout = async () => {
		try {
			toast.success('Se ha deslogueado de forma exitosa')
			localStorage.removeItem('reduxState')
			dispatch(logout())
			navigate(HOME)
			return
		} catch (error) {
			toast.error('Hubo un error')
		}
	}

	return { login, register, loogout }
}

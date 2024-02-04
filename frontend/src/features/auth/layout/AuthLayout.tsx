import { LOGIN, REGISTER } from '../../../constants/paths'
import { ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

interface IAuthLayout {
	children: ReactNode
	form: ReactNode
}

export const AuthLayout = ({ children, form }: IAuthLayout) => {
	const { pathname } = useLocation()
	return (
		<div className="grid space-y-3 md:h-screen md:grid-cols-2 md:space-y-0">
			<div className="bg-gradient-to-r from-purple-700 to-indigo-600">
				{children}
			</div>
			<div className="place-self-center">
				<div className="space-y-6">
					<h1 className="text-black text-4xl font-medium ">
						{pathname == LOGIN ? 'Login' : 'Registrar'}
					</h1>
					<p className="text-gray text-base font-normal">
						Already have en account?{' '}
						<NavLink
							className="text-[#F5167E] font-medium"
							to={pathname === LOGIN ? REGISTER : LOGIN}>
							{pathname === LOGIN ? 'Registrar' : 'Login'}
						</NavLink>
					</p>
					{form}
				</div>
			</div>
		</div>
	)
}

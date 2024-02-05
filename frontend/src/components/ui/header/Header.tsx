import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Button, ButtonTypeStyle } from '../../../components/common/button'
import { HOME, LOGIN, MY_EVENTS } from '../../../constants/paths'
import { useAppSelector } from '../../../store/store'
import { useAuth } from '../../../features/auth/hooks/useAuth'

export const Header = () => {
	const user = useAppSelector(state => state.user.user)
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { loogout } = useAuth()
	const optionNavigation = [
		{ name: 'Home', path: HOME },
		{ name: 'Mis eventos', path: MY_EVENTS },
	]
	return (
		<header
			className={`flex justify-between items-center left-0 right-0 md:z-10 lg:px-20 py-5 px-5 lg:py-0 bg-black ${pathname === HOME ? 'lg:absolute lg:mt-5 lg:bg-transparent' : 'lg:h-20 lg:bg-gradient-to-r lg:from-purple-700 lg:to-indigo-600'}`}>
			<figure className="w-36 h-9">
				<img
					className="w-full h-full"
					src="https://cloud.torneos.gg/media/images/logos/light-logo-full.png"
					alt="Logo"
				/>
			</figure>
			<span className="text-white text-base flex flex-col-reverse space-y-2 font-medium md:space-x-10 md:block">
				{optionNavigation.map(option => (
					<NavLink
						to={option.path}
						key={option.path}
						className="hover:text-[#F5167E]">
						{option.name}
					</NavLink>
				))}
				{user === null ? (
					<Button
						typeStyle={ButtonTypeStyle.outLine}
						classname="w-24 hover:text-[#F5167E] hover:border-[#F5167E]"
						onClick={() => navigate(LOGIN)}>
						Login
					</Button>
				) : (
					<Button
						classname="w-24 hover:text-[#F5167E] hover:border-[#F5167E]"
						onClick={loogout}>
						Logout
					</Button>
				)}
			</span>
		</header>
	)
}

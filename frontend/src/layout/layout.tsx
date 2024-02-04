import { Header } from '../components/ui/header/Header'
import { Footer } from '../components/ui/footer/footer'

import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

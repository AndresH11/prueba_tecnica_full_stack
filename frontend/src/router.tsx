import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import { HOME, LOGIN, MY_EVENTS, REGISTER } from './constants/paths'
import { Login } from './features/auth/pages/Login'
import { Register } from './features/auth/pages/Register'
import { MyEvents } from './features/myEvents/pages/myEvents'
import { Home } from './features/events/pages/Home'
import { Layout } from './layout/layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { NoFound } from './components/noFound'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path={LOGIN} element={<Login />} />
			<Route path={REGISTER} element={<Register />} />
			<Route element={<Layout />}>
				<Route path={HOME} element={<Home />} />

				<Route
					path={MY_EVENTS}
					element={
						<ProtectedRoute>
							<MyEvents />
						</ProtectedRoute>
					}
				/>
			</Route>
			<Route path="*" element={<NoFound />} />
		</>
	)
)

import { Navigate } from 'react-router-dom'
import { HOME } from '../constants/paths'
import { useAppSelector } from '../store/store'

export function ProtectedRoute({
	children,
}: {
	children: JSX.Element
}): JSX.Element {
	const user = useAppSelector(state => state.user.user)
	if (user === null) {
		alert('Debes estar logueado para poder ver tus eventos')
		return <Navigate replace to={HOME} />
	}

	return children
}

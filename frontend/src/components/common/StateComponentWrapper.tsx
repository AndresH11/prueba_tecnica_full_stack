import { Spinner } from 'flowbite-react'

export const StateComponentWrapper = ({
	children,
	isLoading,
}: {
	children: React.ReactNode
	isLoading: boolean
}) => {
	if (isLoading) {
		return <Spinner />
	}

	return <>{children}</>
}

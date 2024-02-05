import { Spinner } from 'flowbite-react'

export const StateComponentWrapper = ({
	children,
	isLoading,
	length,
	voidMessagne,
}: {
	voidMessagne: string
	length: number
	children: React.ReactNode
	isLoading: boolean
}) => {
	if (isLoading) {
		return <Spinner />
	}

	if (length < 1) {
		return <p className="text-lg text-gray-700 font-bold">{voidMessagne}</p>
	}

	return <>{children}</>
}

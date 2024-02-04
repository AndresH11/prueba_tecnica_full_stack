import { useState } from 'react'

export type ReturnUseDialog = ReturnType<typeof useDialog>

export const useDialog = (intialState = false) => {
	const [isOpen, setIsOpen] = useState(intialState)

	const onClose = () => {
		setIsOpen(false)
	}

	const onOpen = () => {
		setIsOpen(true)
	}

	return { isOpen, onClose, onOpen }
}

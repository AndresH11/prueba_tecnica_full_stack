import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { IoCloseCircleOutline } from 'react-icons/io5'

interface DialogProps {
	children: React.ReactNode
	isOpen: boolean
	containerClassName: string
	closable?: boolean
	onClose?: () => void
}

const backdrop = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
}

const modal = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { delay: 0.1 },
	},
}

export default function CustomDialog({
	children,
	isOpen,
	containerClassName,
	closable = false,
	onClose,
}: DialogProps) {
	const containerClass = classNames(
		'bg-slate-100 dark:bg-darkBackground rounded-lg relative',
		containerClassName
	)

	return (
		<AnimatePresence>
			{isOpen ? (
				<>
					{createPortal(
						<motion.div
							animate="visible"
							className="fixed inset-0 bg-black/50 z-50 w-full h-full place-items-center grid"
							exit="hidden"
							id="modal"
							initial="hidden"
							variants={backdrop}>
							<motion.div className={containerClass} variants={modal}>
								{children}
								{closable ? (
									<button
										className="outline-none text-grayCustom dark:text-darkText absolute top-2 right-2 text-2xl"
										type="button"
										onClick={onClose}>
										<IoCloseCircleOutline className="" />
									</button>
								) : null}
							</motion.div>
						</motion.div>,
						document.body
					)}
				</>
			) : null}
		</AnimatePresence>
	)
}

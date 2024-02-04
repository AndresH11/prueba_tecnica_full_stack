import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export const enum ButtonTypeStyle {
	outLine = 'outLine',
	normal = 'normal',
}

interface IButton {
	classname?: string
	type?: 'button' | 'submit' | 'reset'
	typeStyle?: ButtonTypeStyle
	children: ReactNode
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button = ({
	classname,
	type = 'button',
	typeStyle = ButtonTypeStyle.normal,
	children,
	onClick,
}: IButton) => (
	<motion.button
		whileHover={{ scale: 1.05 }}
		type={type}
		onClick={onClick}
		className={`font-bold text-lg h-14  px-2 text-center rounded-3xl whitespace-nowrap ${typeStyle == ButtonTypeStyle.outLine ? 'bg-transparent border border-white' : 'bg-[#F5167E] text-white'} ${classname}`}>
		{children}
	</motion.button>
)

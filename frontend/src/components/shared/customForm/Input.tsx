import { forwardRef } from 'react'

type InputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
	<input
		{...props}
		ref={ref}
		className="bg-transparent border-b-2 outline-none"
	/>
))

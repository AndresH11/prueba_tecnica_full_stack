import { ErrorMessage } from './customForm/ErrorMessage'

interface Props {
	error?: string
	children: React.ReactNode
	required?: boolean
	label: string
	title: string
	className?: string
}

export const Wrapper = ({
	error,
	children,
	required,
	label,
	title,
	className,
}: Props) => {
	return (
		<div className={`space-y-2 ${className ?? ''}`}>
			<label
				className="font-medium text-grayCustom dark:text-darkText block"
				htmlFor={label}>
				{title} {required && <span>*</span>}
			</label>
			{children}
			{error ? <ErrorMessage>{error}</ErrorMessage> : null}
		</div>
	)
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef } from 'react'
import Select from 'react-select'

// eslint-disable-next-line react/display-name
export const CustomSelect = forwardRef<any, any>((props, ref) => {
	return (
		<Select
			ref={ref}
			className="text-sm capitalize font-medium bg-transparent border-b-2 outline-none text-white"
			{...props}
		/>
	)
})
//my-react-select-container
//classNamePrefix="my-react-select"

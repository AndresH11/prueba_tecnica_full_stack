import { ReactNode } from 'react'

interface IWrapperSection {
	title: string
	children: ReactNode
}

export const WrapperSection = ({ title, children }: IWrapperSection) => {
	return (
		<section className="mt-20 xl:w-9/12 xl:mx-auto xl:mt-64 px-10 xl:px-20 xl:space-x-10">
			<h2 className="text-[#242565] font-bold text-4xl">{title}</h2>
			{children}
		</section>
	)
}

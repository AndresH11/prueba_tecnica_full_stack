interface IMessangeBox {
	nickName: string
	message: string
	date: string
}

export const MessangeBox = (props: IMessangeBox) => {
	const date = new Date(Number(props.date)).toLocaleString()
	return (
		<div className="flex items-start gap-2.5">
			<img
				className="w-8 h-8 rounded-full"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCoXh_PEjT5iDFvync9pcJb15OtoydDcqJN4aTK6ivQ&s"
				alt="avatar"
			/>
			<div className="flex flex-col w-full max-w-[320px] drop-shadow-md leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-x">
				<div className="flex items-center space-x-2 rtl:space-x-reverse">
					<span className="text-sm font-semibold text-gray-900 ">
						{props.nickName}
					</span>
					<span className="text-sm font-normal text-gray-500 ">{date}</span>
				</div>
				<p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
					{props.message}
				</p>
				<span className="text-sm font-normal text-gray-500 ">Delivered</span>
			</div>
		</div>
	)
}

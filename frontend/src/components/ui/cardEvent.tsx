interface ICardEvent {
	title: string
	srcImage: string
	details: string
	month: string
	day: number
	totalCups: number
	availableCups: number
	onClick?: () => void
}
export const CardEvent = (props: ICardEvent) => (
	<div
		className="max-w-80 min-h-80 bg-white rounded-2xl drop-shadow-lg hover:scale-105 transition-transform cursor-pointer"
		onClick={props.onClick}>
		<figure>
			<img
				className="bg-cover bg-no-repeat rounded-tr-2xl	rounded-tl-2xl"
				src={props.srcImage}
				alt="event image"
			/>
		</figure>
		<div className="grid grid-cols-4 h-full p-2 ">
			<div className="col-span-1 row-span-2 flex flex-col items-center justify-center">
				<p className="font-bold text-[#3D37F1] text-xs">{props.month}</p>
				<p className="font-bold text-black text-2xl">{props.day}</p>

				<p className="font-bold text-[#3D37F1] text-xs">{'Cupos'}</p>
				<div>
					<span className="font-bold text-black text-lg">
						{props.availableCups}
					</span>
					<span className="font-bold text-black text-lg">{`/${props.totalCups}`}</span>
				</div>
			</div>
			<p className="font-bold text-black text-lg col-span-3 row-span-1">
				{props.title}
			</p>
			<p className="font-normal text-[#6A6A6A] text-base col-span-3 row-span-2">
				{props.details}
			</p>
		</div>
	</div>
)

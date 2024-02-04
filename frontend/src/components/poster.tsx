import { EventSearch } from '../features/events/components/EventSearch'
import { Button, ButtonTypeStyle } from './common/button'

export const Poster = () => (
	<section className="grid md:grid-cols-2 place-content-center bg-gradient-to-r from-purple-700 to-indigo-600 lg:h-screen px-20 relative">
		<video
			className="w-full bottom-0 top-0 left-0 right-0 z-0 hidden md:block md:absolute"
			src="https://cloud.torneos.gg/media/videos/pages/landing-page.mp4"
			autoPlay
			muted
			loop></video>
		<figure className="place-self-center animate-bounce animate-infinite animate-duration-[10000ms] animate-delay-[10000ms] animate-ease-linear">
			<img
				src="https://cloud.torneos.gg/media/images/ggbot-xmas.png"
				alt="Poster"
			/>
		</figure>
		<div className="space-y-10 max-w-md place-self-center z-10 pb-4 lg:pb-0">
			<p className="font-bold text-white text-4xl">Bienvenido a Torneos.GG</p>
			<p className="font-normal text-white text-lg">
				Únete a torneos hechos a medida, y juega de una manera diferente a tus
				juegos favoritos
			</p>
			<div className="flex items-center gap-x-10">
				<Button>Get Tikect</Button>
				<Button classname="text-white" typeStyle={ButtonTypeStyle.outLine}>
					Learn more
				</Button>
			</div>
		</div>
		<div className="2xl:-bottom-48 2xl:left-64 hidden 2xl:block 2xl:absolute">
			<EventSearch />
		</div>
	</section>
)

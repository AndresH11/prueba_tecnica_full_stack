import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export const Footer = () => (
	<footer className="bg-[#0A075F] grid md:grid-cols-2 w-full min-h-96 mt-20 px-10 md:px-0 ">
		<div className="text-white md:justify-self-center mt-10">
			<figure className="w-36 h-9">
				<img
					className="w-full h-full"
					src="https://cloud.torneos.gg/media/images/logos/light-logo-full.png"
					alt="Logo"
				/>
			</figure>
			<p className="font-normal text-sm max-w-56 mt-2">
				Esto es una descripcion cualquiera y muy vanacno como un lorem ipsu
			</p>
			<div className="flex items-center gap-x-4 mt-5">
				<FaFacebook />
				<FaXTwitter />
				<FaLinkedin />
			</div>
		</div>
		<div className="md:justify-self-center mt-10">
			<p className="font-bold text-lg text-white">Plan event</p>
			<ul className="font-semibold text-sm text-white">
				<li className="mt-1">plan 1</li>
				<li className="mt-1">plan 2</li>
				<li className="mt-1">plan 3</li>
				<li className="mt-1">plan 4</li>
			</ul>
		</div>
	</footer>
)

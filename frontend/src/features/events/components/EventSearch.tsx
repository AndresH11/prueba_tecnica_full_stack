import { Input } from '../../../components/shared/customForm/Input'
import { CustomSelect } from '../../../components/shared/customForm/CustomSelect'
import { Wrapper } from '../../../components/shared/Wrapper'

export const EventSearch = () => (
	<div className="bg-[#242565] space-y-4 lg:space-y-0 py-4 lg:py-0 lg:w-[1024px] flex gap-x-20 flex-wrap items-center lg:px-20 justify-around md:h-36 rounded-xl">
		<Wrapper label={''} title={'Search event'} className="text-white">
			<Input />
		</Wrapper>
		<Wrapper label={''} title="Place" className="text-white">
			<Input />
		</Wrapper>
		<Wrapper label={''} title={'Time'} className="text-white">
			<CustomSelect />
		</Wrapper>
	</div>
)

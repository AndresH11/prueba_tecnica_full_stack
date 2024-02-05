import { useDialog } from '../../../hooks/ui/useDialog'
import { Button, ButtonTypeStyle } from '../../../components/common/button'
import { CardEvent } from '../../../components/ui/cardEvent'
import CustomDialog from '../../../components/ui/CustomDialog'
import { useEffect, useState } from 'react'
import { MONTH } from '../../../constants/month'
import { useGetAllMyEvents } from '../hooks/user_get_all_my_events'
import { useAppSelector } from '../../../store/store'
import { useRemoveMyEvents } from '../hooks/use_remove_my_events'
import { StateComponentWrapper } from '../../../components/common/StateComponentWrapper'
import { WrapperSection } from '../../../components/common/wrapperSection'

export const MyEvents = () => {
	const [eventId, setEventId] = useState<number>()
	const [userEventId, setUserEventId] = useState<number>()
	const { getAllMyEvent } = useGetAllMyEvents()
	const { removeMyEvent } = useRemoveMyEvents()
	const stateMyEvents = useAppSelector(state => state.myEvents)
	const dialogMyEvents = useDialog()

	useEffect(() => {
		getAllMyEvent()
	}, [])

	const onClickCard = (userEventId: number, eventId: number) => {
		setEventId(eventId)
		setUserEventId(userEventId)
		dialogMyEvents.onOpen()
	}

	const remove = () => {
		removeMyEvent({ eventId: eventId!, userEventId: userEventId! })
		dialogMyEvents.onClose()
	}

	return (
		<WrapperSection title="Mis eventos">
			<div className="flex justify-between items-center flex-wrap gap-10 py-10 mt-10 max-h-[949px] overflow-y-scroll overscroll-y-contain">
				<StateComponentWrapper
					isLoading={stateMyEvents.loading}
					length={stateMyEvents.events.length}
					voidMessagne="No tienes eventos reservados">
					{stateMyEvents.events.map(event => (
						<CardEvent
							onClick={() => onClickCard(event.id, event.event.id)}
							key={event.id}
							title={event.event.name}
							srcImage={event.event.imagePath}
							details={event.event.description}
							month={MONTH[new Date(Number(event.event.date)).getMonth()]}
							day={new Date(Number(event.event.date)).getDay()}
							totalCups={event.event.totalCups}
							availableCups={event.event.availableCups}
						/>
					))}
				</StateComponentWrapper>
			</div>
			<div className="flex justify-center items-center mt-20">
				<Button>Load more</Button>
			</div>
			<CustomDialog
				onClose={dialogMyEvents.onClose}
				isOpen={dialogMyEvents.isOpen}
				containerClassName={'min-w-80 p-10 space-y-5'}
				closable>
				<p className="font-bold text-xl text-[#242565]">
					¿Deseas cancelar la reserva?{' '}
				</p>

				<div className="flex items-center justify-center gap-x-5">
					{' '}
					<Button
						classname="text-[#F5167E] border-[#F5167E]"
						typeStyle={ButtonTypeStyle.outLine}
						onClick={remove}>
						Confirmar
					</Button>
					<Button onClick={dialogMyEvents.onClose}>Devolver</Button>
				</div>
			</CustomDialog>
		</WrapperSection>
	)
}

import { CardEvent } from '../../../components/ui/cardEvent'
import { Poster } from '../../../components/poster'
import { useDialog } from '../../../hooks/ui/useDialog'
import { Button } from '../../../components/common/button'
import CustomDialog from '../../../components/ui/CustomDialog'
import { useEffect, useState } from 'react'
import { MONTH } from '../../../constants/month'
import { useGetAllEvents } from '../hooks/use_get_all_event'
import { useAppSelector } from '../../../store/store'
import { useReservarEvento } from '../hooks/useReservarEvento'
import toast from 'react-hot-toast'
import { useGetFinishedEvent } from '../hooks/use_get_finished_event'
import { CommentBox } from '../features/comments/components/commentBox'
import { MessangeBox } from '../features/comments/components/MessageBox'
import { useComments } from '../features/comments/hooks/use_get_comment'
import { StateComponentWrapper } from '../../../components/common/StateComponentWrapper'
import { WrapperSection } from '../../../components/common/wrapperSection'

export const Home = () => {
	const [eventId, setEventId] = useState<number>()
	const dialogNewEvents = useDialog()
	const dialogFinishedEvents = useDialog()
	const { getAllEvent } = useGetAllEvents()
	const { getFinishedEvent } = useGetFinishedEvent()
	const { reservar } = useReservarEvento()
	const { getComment } = useComments()
	const stateEvents = useAppSelector(state => state.event)
	const stateFinishedEvents = useAppSelector(state => state.finishedEvents)
	const stateComments = useAppSelector(state => state.comments)
	const user = useAppSelector(state => state.user.user)

	useEffect(() => {
		getAllEvent()
		getFinishedEvent()
	}, [])

	const onClickCardEvent = ({
		eventId,
		availableCups,
	}: {
		eventId: number
		availableCups: number
	}) => {
		if (availableCups === 0)
			return toast.error('No hay cupo disponible para reservar')
		setEventId(eventId)
		dialogNewEvents.onOpen()
		return
	}

	const onClickReservar = () => {
		reservar({ eventId: eventId!, userId: user?.id })
		dialogNewEvents.onClose()
	}

	const onClickComments = (eventId: number) => {
		setEventId(eventId)
		getComment(eventId)
		dialogFinishedEvents.onOpen()
	}

	return (
		<>
			<Poster />
			<WrapperSection title="Eventos">
				<div className="flex justify-center items-center flex-wrap gap-10 py-10 mt-10 max-h-[949px] scrollbar-thin scrollbar-thumb-[#242565] scrollbar-track-white overflow-y-scroll overscroll-y-contain">
					<StateComponentWrapper isLoading={stateEvents.loading}>
						{stateEvents.events.map(event => (
							<CardEvent
								onClick={() =>
									onClickCardEvent({
										eventId: event.id,
										availableCups: event.availableCups,
									})
								}
								key={event.id}
								title={event.name}
								srcImage={event.imagePath}
								details={event.description}
								month={MONTH[new Date(Number(event.date)).getMonth()]}
								day={new Date(Number(event.date)).getDate()}
								totalCups={event.totalCups}
								availableCups={event.availableCups}
							/>
						))}
					</StateComponentWrapper>
				</div>
				<div className="flex justify-center items-center mt-20">
					<Button>Load more</Button>
				</div>
				<CustomDialog
					onClose={dialogNewEvents.onClose}
					isOpen={dialogNewEvents.isOpen}
					containerClassName={
						'min-w-80 p-10 space-y-5 flex flex-col items-center'
					}
					closable>
					<p className="font-bold text-xl text-[#242565]">Reserva un cupo</p>
					<Button onClick={onClickReservar}>Reservar cupo</Button>
				</CustomDialog>
			</WrapperSection>
			<div className="mt-10 mx-20 h-1 bg-gray-600 border border-gray-600" />
			<WrapperSection title="Eventos finalizados">
				<div className="flex justify-center items-center flex-wrap gap-10 py-10 mt-10 max-h-[949px] scrollbar-thin scrollbar-thumb-[#242565] scrollbar-track-white overflow-y-scroll overscroll-y-contain">
					<StateComponentWrapper isLoading={stateFinishedEvents.loading}>
						{stateFinishedEvents.events.map(event => (
							<CardEvent
								onClick={() => onClickComments(event.id)}
								key={event.id}
								title={event.name}
								srcImage={event.imagePath}
								details={event.description}
								month={MONTH[new Date(Number(event.date)).getMonth()]}
								day={new Date(Number(event.date)).getDate()}
								totalCups={event.totalCups}
								availableCups={event.availableCups}
							/>
						))}
					</StateComponentWrapper>
				</div>
				<div className="flex justify-center items-center mt-20">
					<Button>Load more</Button>
				</div>
				<CustomDialog
					onClose={dialogFinishedEvents.onClose}
					isOpen={dialogFinishedEvents.isOpen}
					containerClassName={'w-screen h-screen p-10 space-y-5'}
					closable>
					<p className="font-bold text-xl text-[#242565] text-center">
						Comentarios
					</p>
					<CommentBox userId={user?.id!} eventId={eventId!} />
					<div className="max-h-[420px] space-y-5 scrollbar-thin scrollbar-thumb-[#242565] scrollbar-track-white overflow-y-auto">
						<StateComponentWrapper isLoading={stateComments.loading}>
							{stateComments.comments.map(comment => (
								<MessangeBox
									key={comment.id}
									nickName={comment.user.nickName}
									message={comment.comment}
									date={comment.date}
								/>
							))}
						</StateComponentWrapper>
					</div>
				</CustomDialog>
			</WrapperSection>
		</>
	)
}

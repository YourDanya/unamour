import {MouseEvent, TouchEvent} from 'react'
import {useGetState} from 'app/[locale]/_common/components/range-slider/range-slider.hook'

export const thumbDowmn = (state: ReturnType<typeof useGetState> & {event: MouseEvent | TouchEvent}) => {
    const {stateRef, event, elemsRef} = state
    const {name} = event.target as HTMLButtonElement

    const active = name as 'min' | 'max'

    let clientX
    const mobileEvent = event as TouchEvent
    const descEvent = event as MouseEvent

    if (mobileEvent.touches) {
        clientX = mobileEvent.touches[0].clientX
    } else {
        clientX = descEvent.clientX
        event.preventDefault()
    }

    stateRef.current.active = active
    const thumbX = elemsRef.current[active]?.getBoundingClientRect().x as number

    stateRef.current[active].diff = clientX - thumbX
    stateRef.current[active].x = clientX
}


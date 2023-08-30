import React from 'react'
import {ReactEventState} from 'app/_common/components/slider/slider.types'

const down = (state: ReactEventState) => {
    const {event, moveRef, setTransition, elemsRef} = state

    let clientX
    const mobileEvent = event as React.TouchEvent
    const descEvent = event as React.MouseEvent

    if (mobileEvent.touches) {
        clientX = mobileEvent.touches[0].clientX
    } else {
        clientX = descEvent.clientX
        event.preventDefault()
    }

    moveRef.current.clientX = clientX
    moveRef.current.startX = clientX
    moveRef.current.fast = true
    moveRef.current.moving = true
    moveRef.current.moveCurrent = moveRef.current.current
    moveRef.current.wasMoved = false

    setTimeout(() => {
        moveRef.current.fast = false
    }, 200)

    setTransition('unset')
}

export default down
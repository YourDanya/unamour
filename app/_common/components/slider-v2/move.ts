import {EventState} from 'app/_common/components/slider-v2/slider.types'

const move = (state: EventState) => {
    const {moveRef} = state

    let clientX
    const mobileEvent = event as TouchEvent
    const descEvent = event as MouseEvent

    if (mobileEvent.touches) {
        clientX = mobileEvent.touches[0].clientX
    } else {
        clientX = descEvent.clientX
    }

    moveRef.current.blocking = true

    const translate = clientX - moveRef.current.startX
    moveRef.current.clientX = clientX
}

export default move
import {useGetState} from 'app/_common/components/slider-v2/slider.hook'
import {EventState} from 'app/_common/components/slider-v2/slider.types'

const up = (state: EventState) => {
    const {moveRef, event, slideRef, setCurrent, setTransition, length} = state

    let clientX
    const mobileEvent = event as TouchEvent
    const descEvent = event as MouseEvent
    if (mobileEvent.changedTouches) {
        clientX = mobileEvent.changedTouches[0].clientX
    } else {
        event.preventDefault()
        clientX = descEvent.clientX
    }

    const translate = moveRef.current.startX - clientX
    const width = slideRef.current?.children[moveRef.current.current].getBoundingClientRect().width as number
    moveRef.current.moving = false

    let toMove: number
    if (moveRef.current.fast) {
        if (translate > 0) {
            toMove = Math.ceil(translate / width)
        } else {
            toMove = Math.floor(translate / width)
        }
    } else {
        toMove = Math.round(translate / width)
    }

    let current = moveRef.current.current + toMove

    if (current >= length || current < 0) {
        setCurrent(length - current - 1)
        // setTransform(getTransform(length - current - 1, -translate))
    } else {
        setCurrent(current)
        setTransition('4s all')
    }
}

export default up
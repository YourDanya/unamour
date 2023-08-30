import {EventState} from 'app/_common/components/slider/slider.types'
import {getElem} from 'app/_common/components/slider/utils/get-elem'

const move = (state: EventState) => {
    const {moveRef, setMove, elemsRef, slideRef, event} = state

    let clientX
    const mobileEvent = event as TouchEvent
    const descEvent = event as MouseEvent

    if (mobileEvent.touches) {
        clientX = mobileEvent.touches[0].clientX
    } else {
        clientX = descEvent.clientX
    }

    const translate = clientX - moveRef.current.startX

    if (moveRef.current.clientX > clientX) {
        moveForward(state)
    } else {
        moveBack(state)
    }

    setMove(translate)
    moveRef.current.clientX = clientX
    moveRef.current.wasMoved = true
}

export default move

const moveForward = (state: EventState) => {
    const {moveRef, elemsRef, slideRef, leftElemsRef, rightElemsRef, props: {infinite}, perSlide} = state

    const shouldStop = moveRef.current.moveCurrent === elemsRef.current.length - perSlide && !infinite
    if (shouldStop) {
        return
    }

    const index = moveRef.current.moveCurrent + perSlide
    const elem = getElem({...state, index})

    const {left, width} = (elem as HTMLDivElement).getBoundingClientRect()
    const sliderRight = slideRef.current?.getBoundingClientRect().right as number

    if (sliderRight > left + width / 2) {
        moveRef.current.moveCurrent += 1
    }
}

const moveBack = (state: EventState) => {
    const {moveRef, elemsRef, slideRef, props: {infinite}, perSlide} = state

    const shouldStop = moveRef.current.moveCurrent === 0 && !infinite
    if (shouldStop) {
        return
    }

    const index = moveRef.current.moveCurrent + perSlide - 1
    const elem = getElem({...state, index})

    const {left, width} = (elem as HTMLDivElement).getBoundingClientRect()
    const sliderRight = slideRef.current?.getBoundingClientRect().right as number

    if (sliderRight < left + width / 2) {
        moveRef.current.moveCurrent -= 1
    }
}


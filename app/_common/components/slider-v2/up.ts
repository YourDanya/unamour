import {useGetState} from 'app/_common/components/slider-v2/slider.hook'
import {EventState} from 'app/_common/components/slider-v2/slider.types'
import move from 'app/_common/components/slider-v2/move'

const up = (state: EventState) => {
    const {moveRef, setCurrent, setMove, elemsRef, setTransition, setShouldCheckLimits} = state
    const length = elemsRef.current.length
    const prevCurrent = moveRef.current.current
    handleCurrent(state)

    if (moveRef.current.current >= length) {
        handleRightLimit(state)
    } else if (moveRef.current.current < 0) {
        handleLeftLimit(state)
    } else {
        setTransition('0.4s all')
        setMove(0)
    }
    
    setCurrent(moveRef.current.current)
    if (prevCurrent === moveRef.current.current) {
        setShouldCheckLimits(true)
    }

    moveRef.current.moving = false
}

export default up

const handleCurrent = (state: EventState) => {
    const {moveRef, elemsRef, rightElemsRef, leftElemsRef, props: {infinite}, perSlide} = state
    const length = elemsRef.current.length
    const {moveCurrent, current, fast, clientX, startX} = moveRef.current

    const isFast = moveCurrent === current && fast
    moveRef.current.current = moveCurrent

    const shouldRightStop = moveRef.current.moveCurrent === elemsRef.current.length - perSlide && !infinite
    const shouldLeftStop = moveRef.current.moveCurrent === 0 && !infinite

    if (isFast && clientX - startX <= -3 && !shouldRightStop) {
        ++moveRef.current.current
    }

    if (isFast && clientX - startX >= 3 && !shouldLeftStop) {
        --moveRef.current.current
    }
}

const handleRightLimit = (state: EventState) => {
    const {rightElemsRef, moveRef, elemsRef, slideRef, setMove} = state

    const elem = rightElemsRef.current[moveRef.current.current - elemsRef.current.length]!
    moveRef.current.current = +elem.getAttribute('data-index')!
    moveRef.current.limit = 'right'

    const elemRect = elem!.getBoundingClientRect()
    const sliderRect = slideRef.current!.getBoundingClientRect()

    const toMove = elemRect.left - sliderRect.left
    setMove(toMove)
}

const handleLeftLimit = (state: EventState) => {
    const {leftElemsRef, moveRef, slideRef, setMove} = state

    const elem = leftElemsRef.current[leftElemsRef.current.length + moveRef.current.current]!
    moveRef.current.current = +elem.getAttribute('data-index')!
    moveRef.current.limit = 'left'

    const elemRect = elem!.getBoundingClientRect()
    const sliderRect = slideRef.current!.getBoundingClientRect()

    const toMove = elemRect.left - sliderRect.left
    setMove(toMove)
}
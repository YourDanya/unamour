import {useCalcDimensions} from 'app/_common/components/slider/utils/calc'

export const useArrows = (state: ReturnType<typeof useCalcDimensions>) => {
    const {current, setCurrent, setTransition, length, props: {infinite}, moveRef, elemsRef, perSlide} = state

    const onBack = () => {
        if (current === 0 && infinite) {
            setCurrent(length)
            setTransition('unset')
            moveRef.current.limit = 'left'
            return
        }

        if (current === 0) {
            return
        }

        setCurrent(current - 1)
    }

    const onForward = () => {
        if (current === length - 1 && infinite) {
            setCurrent(- 1)
            setTransition('unset')
            moveRef.current.limit = 'right'
            return
        }

        if (current === length - perSlide && !infinite) {
            return
        }

        setCurrent(current + 1)
    }

    return {...state, onBack, onForward}
}







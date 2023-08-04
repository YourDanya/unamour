import {useCalcDimensions} from 'app/_common/components/slider-v2/calc'

export const useArrows = (state: ReturnType<typeof useCalcDimensions>) => {
    const {current, setCurrent, setTransition, length, props: {infinite}} = state

    const onBack = () => {
        if (current === 0 && infinite) {
            setCurrent(length)
            setTransition('unset')
            return
        }

        if (current === 0) {
            return
        }

        setCurrent(current - 1)
    }

    const onForward = () => {
        if (current === length - 1 && infinite) {
            setCurrent(-1)
            setTransition('unset')
            return
        }

        if (current === length - 1) {
            return
        }

        setCurrent(current + 1)
    }

    return {...state, onBack, onForward}
}
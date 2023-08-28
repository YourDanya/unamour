import {useArrows} from 'app/_common/components/slider/utils/arrows'
import {useEffect} from 'react'
import {useGetState} from 'app/_common/components/slider/slider.hook'

export const useCalcLimits = (state: ReturnType<typeof useArrows>) => {
    const {current, shouldCheckLimits, setShouldCheckLimits} = state

    useEffect(() => {
        requestAnimationFrame(() => {
            calcLimits(state)
        })
    }, [current])

    useEffect(() => {
        if (!shouldCheckLimits) {
            return
        }
        requestAnimationFrame(() => {
            calcLimits(state)
            setShouldCheckLimits(false)
        })
    }, [shouldCheckLimits])
}

const calcLimits = (state: ReturnType<typeof useGetState>) => {
    const {current, length, setCurrent, setTransition, moveRef, setMove, props} = state

    if (current === length) {
        setCurrent(length - 1)
    }
    if (current === -1) {
        setCurrent(0)
    }

    if (moveRef.current.limit) {
        moveRef.current.limit = ''
        setMove(0)
        setTransition('0.4s all')
    }
    moveRef.current.current = current

    if (props.setCurrent && current < length && current >= 0) {
        props.setCurrent(current)
    }
}

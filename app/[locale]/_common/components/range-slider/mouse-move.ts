import {useGetState} from 'app/[locale]/_common/components/range-slider/range-slider.hook'
import {calcValue} from 'app/[locale]/_common/components/range-slider/range-slider.hook'

export const thumbMove = (state: ReturnType<typeof useGetState> & { event: MouseEvent | TouchEvent }) => {
    const {stateRef, elemsRef, event, setState, props:{valuesRef, onChange}} = state

    const stateValues = getValues(state)
    const {active} = stateValues

    let values

    if (active === 'min') {
        values = leftThumb(stateValues)
    } else {
        values = rightThumb(stateValues)
    }

    const {limit, newValue} = values

    if (!limit) {
        valuesRef.current[active] = newValue.toString()
        onChange({...valuesRef.current})
    }
}

const getValues = (state: ReturnType<typeof useGetState> & { event: MouseEvent | TouchEvent }) => {
    const {stateRef, elemsRef, props: {defMin, defMax}} = state

    const active = stateRef.current.active as 'min' | 'max'
    const trackRect = (elemsRef.current.track as Element).getBoundingClientRect()
    const startX = trackRect.x
    const trackWidth = trackRect.width
    const thumbWidth = (elemsRef.current.min as Element).getBoundingClientRect().width

    let clickX
    const mobileEvent = event as TouchEvent
    const descEvent = event as MouseEvent

    if (mobileEvent.touches) {
        clickX = mobileEvent.touches[0].clientX
    } else {
        clickX = descEvent.clientX
    }

    const diff = stateRef.current[active].diff

    const calcValues = {defMin, defMax, trackWidth, startX}
    const newValue = calcValue({...calcValues, targetX: clickX - diff})

    return {...state, clickX, active, newValue, thumbWidth, diff, calcValues, startX}
}

const leftThumb = (state: ReturnType<typeof getValues>) => {
    let {stateRef, newValue, props, clickX, diff, calcValues, startX} = state
    const {valuesRef, defMin, defMax} = props

    const limit = stateRef.current.limit.left || stateRef.current.limit.right

    if (newValue < defMin) {
        stateRef.current.limit.left = true
        newValue = calcValue({...calcValues, targetX: startX})
    } else if (stateRef.current.limit.left && newValue > defMin) {
        stateRef.current.limit.left = false
    }

    if (newValue > +valuesRef.current.max) {
        stateRef.current.limit.right = true
        newValue = +valuesRef.current.max
    } else if (stateRef.current.limit.right && newValue < +valuesRef.current.max) {
        stateRef.current.limit.right = false
    }
    
    return {limit, newValue}
}


const rightThumb = (state: ReturnType<typeof getValues>) => {
    const {stateRef, newValue, props, clickX, thumbWidth, calcValues, diff} = state
    const {valuesRef, defMin, defMax} = props

    const rightDiffValue = calcValue({...calcValues, targetX: clickX + thumbWidth - diff})

    if (newValue < +valuesRef.current.min) {
        stateRef.current.limit.right = true
    } else if (stateRef.current.limit.left && newValue > +valuesRef.current.min) {
        stateRef.current.limit.left = false
    }

    if (newValue > defMax) {
        stateRef.current.limit.right = true
    } else if (stateRef.current.limit.right && rightDiffValue < defMax) {
        stateRef.current.limit.right = false
    }

    const limit = stateRef.current.limit.left && stateRef.current.limit.right

    return {limit, newValue}
}


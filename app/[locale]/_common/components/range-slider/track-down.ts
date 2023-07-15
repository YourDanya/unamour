import {MouseEvent, TouchEvent} from 'react'
import {useGetState} from 'app/[locale]/_common/components/range-slider/range-slider.hook'

export const trackDown = (state: ReturnType<typeof useGetState> & {event: MouseEvent | TouchEvent}) => {
    const {elemsRef, setState, props, event} = state
    const {onChange, defMin, defMax, valuesRef} = props

    event.preventDefault()

    const {clickX, leftThumbX, rightThumbX, trackWidth, trackX, thumbHalfWidth} = getValues(state)

    let active: 'min' | 'max'

    const leftDistance = Math.abs(clickX - leftThumbX)
    const rigtDistance = Math.abs(clickX - rightThumbX)

    let deviation

    if (leftDistance < rigtDistance) {
        active = 'min'
        deviation = - thumbHalfWidth
    } else {
        active = 'max'
        deviation = thumbHalfWidth
    }

    const newValue = (defMin + (clickX - trackX + deviation) / trackWidth * (defMax - defMin)).toString()

    valuesRef.current[active] = newValue
    onChange({...valuesRef.current})
}

const getValues = (state: ReturnType<typeof useGetState> & {event: MouseEvent | TouchEvent}) => {
    const {elemsRef, event} = state

    const trackRect = elemsRef.current.track?.getBoundingClientRect()
    const trackX = trackRect?.x as number
    const trackWidth = trackRect?.width as number

    const leftRect = elemsRef.current.min?.getBoundingClientRect()
    const thumbHalfWidth = leftRect?.width as number / 2
    const leftThumbX = leftRect?.x as number

    const rightThumbX = elemsRef.current.max?.getBoundingClientRect().x as number

    let clickX
    const mobileEvent = event as TouchEvent
    const descEvent = event as MouseEvent

    if (mobileEvent.touches) {
        clickX = mobileEvent.touches[0].clientX
    } else {
        clickX = descEvent.clientX
    }

    return {clickX, leftThumbX, rightThumbX, trackWidth, trackX, thumbHalfWidth}
}
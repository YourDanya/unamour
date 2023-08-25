import {useGetState} from 'app/_common/components/slider/slider.hook'
import React from 'react'

export type EventState = ReturnType<typeof useGetState> & { event: MouseEvent | TouchEvent }

export type ReactEventState = ReturnType<typeof useGetState> & {event: React.MouseEvent | React.TouchEvent}

export type SliderProps = {
    children: React.ReactNode,
    current?: number,
    setCurrent?: (index: number) => void,
    perSlide?: number,
    className?: string,
    infinite?: boolean,
    container?: boolean
}

export type MoveRef = {
    startX: number,
    moving: boolean,
    current: number,
    fast: boolean,
    clientX: number,
    blocking: boolean
}
import {ReactNode} from 'react'

export type SliderProps = {
    children: ReactNode,
    current?: number,
    setCurrent?: (index: number) => void,
    perSlide?: number,
    className?: string
}

export type MoveRef = {
    startX: number,
    moving: false,
    current: number,
    fast: boolean,
    clientX: number,
    blocking: boolean
}
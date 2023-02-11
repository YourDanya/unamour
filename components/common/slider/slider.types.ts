import {ReactNode} from 'react'

export type SliderProps = {
    children: ReactNode,
    current?: number,
    setCurrent?: (index: number) => void,
    perSlide?: number,
    className?: string
}
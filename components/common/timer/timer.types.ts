import {ReactNode} from 'react'

export type TimerProps = {
    initTimer: number
    children: (timer: string) => ReactNode
}
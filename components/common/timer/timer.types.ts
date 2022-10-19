import {ReactNode} from 'react'
import {MouseAction} from 'types/types'

export type TimerProps = {
    initTimer: number,
    onSubmit?: MouseAction,
    clearInitTimer?: () => void,
    children: ((timer: string) => ReactNode) | ((timer: string, onSubmit: MouseAction) => ReactNode)
}
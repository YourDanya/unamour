import {ReactNode} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'

export type TimerProps = {
    initTimer: number | undefined,
    onSubmit?: MouseAction,
    clearInitTimer?: () => void,
    children: ((timer: string) => ReactNode) | ((timer: string, onSubmit: MouseAction) => ReactNode)
}

export type UseTimerParams = Omit<TimerProps, 'children'>
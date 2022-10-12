import {FC, ReactNode} from 'react'
import useTimer from 'components/common/timer/timer.hook'

export type TimerProps = {
    initTimer: number
    children: (timer: string) => ReactNode
}

const Timer: FC<TimerProps> = (props) => {
    const {children} = props
    const {strTimer} = useTimer(props)

    return (
        <>
            {children(strTimer)}
        </>
    )
}

export default Timer
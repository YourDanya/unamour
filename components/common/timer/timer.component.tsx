import {FC} from 'react'
import useTimer from 'components/common/timer/timer.hook'
import {TimerProps} from 'components/common/timer/timer.types'

const Timer: FC<TimerProps> = (props) => {
    const {children, ...other} = props
    const {strTimer, onSubmit} = useTimer(other)

    return (
        <>
            {children(strTimer, onSubmit)}
        </>
    )
}

export default Timer
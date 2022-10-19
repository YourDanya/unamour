import {FC} from 'react'
import useTimer from 'components/common/timer/timer.hook'
import {TimerProps} from 'components/common/timer/timer.types'

const Timer: FC<TimerProps> = (props) => {
    const {children} = props
    const {strTimer, onSubmit} = useTimer(props)

    return (
        <>
            {children(strTimer, onSubmit)}
        </>
    )
}

export default Timer
import {TimerProps} from 'components/common/timer/timer.component'
import {useState} from 'react'
import {parseTimer} from 'utils/main/main.utils'

const useTimer = (props: TimerProps) => {
    const {initTimer} = props
    const [timer, setTimer] = useState(initTimer)

    const interval = setInterval(() => {
        setTimer(timer - 1000)
        if (timer===0) clearInterval(interval)
    }, 1000)

    const strTimer = parseTimer(timer)

    return {strTimer}
}

export default useTimer
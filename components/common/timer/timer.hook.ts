
import {useState} from 'react'
import {parseTimer} from 'utils/main/main.utils'
import {useEffect} from 'react'
import {useRef} from 'react'
import {TimerProps} from 'components/common/timer/timer.types'

const useTimer = (props: TimerProps) => {
    const {initTimer} = props
    const [timer, setTimer] = useState(initTimer)
    const timerRef = useRef(initTimer)

    let intervalRef = useRef<number>()

    useEffect(() => {
        window.clearInterval(intervalRef.current)
        intervalRef.current = window.setInterval(() => {
            if (timerRef.current<1000) {
                clearInterval(intervalRef.current)
                timerRef.current = 0
                setTimer(0)
            } else {
                timerRef.current-=1000
                setTimer(timerRef.current)
            }
        }, 1000)
    }, [initTimer])

    const strTimer = parseTimer(timer)

    return {strTimer}
}

export default useTimer
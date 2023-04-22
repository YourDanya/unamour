import {useState} from 'react'
import {UseTimerParams} from 'app/[locale]/_common/components/timer/timer.types'
import {useRef} from 'react'
import {useEffect} from 'react'
import {parseTimer} from 'app/[locale]/_common/utils/main/main.utils'
import {MouseEvent} from 'react'

const useTimer = (props: UseTimerParams) => {
    const {initTimer, clearInitTimer} = props
    const [timer, setTimer] = useState<number>(initTimer as number)
    const timerRef = useRef<number>(initTimer as number)
    let intervalRef = useRef<number>()

    useEffect(() => {
        if (!initTimer) {
            return
        }
        timerRef.current = (initTimer as number)
        setTimer(initTimer)
        window.clearInterval(intervalRef.current)
        intervalRef.current = window.setInterval(() => {
            if (timerRef.current < 1000) {
                clearInterval(intervalRef.current)
                timerRef.current = 0
                setTimer(0)
                if (clearInitTimer) clearInitTimer()
            } else {
                timerRef.current -= 1000
                setTimer(timerRef.current)
            }
        }, 1000)
    }, [initTimer])

    const onSubmit = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
        if (props.onSubmit && timer<1000){
            props.onSubmit(event)
        }
    }

    const strTimer = parseTimer(timer)
    return {strTimer, onSubmit}
}

export default useTimer
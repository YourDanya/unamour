import {useRef} from 'react'
import {useEffect} from 'react'
import {UseTimer} from 'app/_common/hooks/helpers/timer/timer.types'

const useTimer: UseTimer = (params) => {
    const {timer, setTimer} = params
    const check = useRef<symbol>()

    useEffect(() => {
        if (!timer || timer === '00:00') {
            return
        }
        let [minutes, seconds] = timer.split(':').map((elem) => +elem)
        const allSeconds = (minutes * 60 + seconds) - 1
        minutes = Math.floor( allSeconds / 60)
        seconds = allSeconds % 60
        const newTimer = `${minutes < 10? `0${minutes}`: `${minutes}`}:${seconds < 10 ? `0${seconds}`: `${seconds}`}`

        const symbol = Symbol('id')
        check.current = symbol

        setTimeout(() => {
            if (check.current !== symbol) {
                return
            }
            setTimer(newTimer)
        }, 1000)
    }, [timer])
}

export default useTimer
import useTimer from 'components/common/timer/timer.hook'
import {ItemMessageProps} from 'components/admin/item-form/item-buttons/item-message/item-message.types'
import {useEffect} from 'react'

const useItemMessage = (props: ItemMessageProps) => {
    const {success, onTimerExpiration, field} = props
    const {strTimer: timer} = useTimer({initTimer: success ? 5000 : undefined})

    useEffect(() => {
        if (timer === '00:00') {
            onTimerExpiration(field)
        }
    }, [timer])

    return {timer}
}

export default useItemMessage
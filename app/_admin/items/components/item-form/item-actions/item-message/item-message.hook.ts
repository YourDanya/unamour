import useTimer from 'components/common/timer/timer.hook'
import {ItemMessageProps} from 'components/admin/items/item-form/item-actions/item-message/item-message.types'
import {useEffect} from 'react'
import {ItemActionName} from 'components/admin/items/item-form/item-actions/item-actions.types'

const useItemMessage = (props: ItemMessageProps) => {
    const {isSuccess, onTimerExpiration, name} = props
    const {strTimer: timer} = useTimer({initTimer: isSuccess ? 5000 : undefined})

    useEffect(() => {
        if (timer === '00:00') {
            onTimerExpiration && onTimerExpiration(name as ItemActionName)
        }
    }, [timer])

    return {timer}
}

export default useItemMessage
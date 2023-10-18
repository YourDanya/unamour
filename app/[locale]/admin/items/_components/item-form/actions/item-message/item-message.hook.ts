import {ItemActionName} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.types'
import {ItemMessageProps} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-message/item-message.types'
import {useEffect} from 'react'
import useTimer from 'app/_common/hooks/helpers/timer/timer.hook'
import {useState} from 'react'

const useItemMessage = (props: ItemMessageProps) => {
    const {isSuccess, onTimerExpiration, name} = props

    const [timer, setTimer] = useState('')
    useTimer({timer, setTimer})

    useEffect(() => {
        if (timer === '00:00') {
            onTimerExpiration && onTimerExpiration(name as ItemActionName)
        }
    }, [timer])

    return {timer}
}

export default useItemMessage
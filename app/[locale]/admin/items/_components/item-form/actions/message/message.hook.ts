import {useEffect} from 'react'
import useTimer from 'app/_common/hooks/helpers/timer/timer.hook'
import {useState} from 'react'
import {MessageProps} from 'app/[locale]/admin/items/_components/item-form/actions/message/message.types'
import {ItemActionName} from 'app/[locale]/admin/items/_components/item-form/actions/item-actions.types'

const useMessage = (props: MessageProps) => {
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

export default useMessage
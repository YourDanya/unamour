import {useEffect} from 'react'
import useTimer from 'app/_common/hooks/helpers/timer/timer.hook'
import {useState} from 'react'
import {MessageProps} from 'app/[locale]/admin/items/_components/item-form/message/message.types'

const useMessage = (props: MessageProps) => {
    const {onTimerExpiration, name} = props

    const [timer, setTimer] = useState('')
    useTimer({timer, setTimer})

    useEffect(() => {
        if (timer === '00:00') {
            onTimerExpiration && onTimerExpiration(name)
        }
    }, [timer])

    const onClose = () => {
        props.onClose(name)
    }

    return {timer, onClose}
}

export default useMessage
import {MouseAction} from 'app/[locale]/_common/types/types'
import {useState} from 'react'

const useCookie = () => {
    const [hidden, setHidden] = useState(true)

    const onHide: MouseAction = () => {
        setHidden(false)
    }

    return {hidden, onHide}
}

export default useCookie
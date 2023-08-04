import {MouseEvent} from 'react'
import {useState} from 'react'

const useCheckBox = () => {
    const handleClick = (event: MouseEvent<HTMLElement>) => {event.preventDefault()}
    const [focused, setFocused] = useState(false)

    const onFocus = () => {
        setFocused(!focused)
    }

    return {focused, setFocused, handleClick, onFocus}
}

export default useCheckBox
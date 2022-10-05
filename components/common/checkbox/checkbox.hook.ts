import React from 'react'
import {useToggle} from 'hooks/event-handler/event-handler.hooks'

const useCheckBox = () => {

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {event.preventDefault()}
    const [focused, setFocused] = useToggle()

    return {focused, setFocused, handleClick}
}

export default useCheckBox
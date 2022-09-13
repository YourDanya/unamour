import {useToggle} from "../../../hooks/event-handler.hooks"
import {InputProps} from "./input.component";
import React from "react";

const useInput = (props: InputProps) => {
    const {handleValidate} = props

    const [focused, _handleFocus] = useToggle()

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
       _handleFocus(event)
        handleValidate && handleValidate(event)
    }

    return {focused, handleFocus}
}

export default useInput
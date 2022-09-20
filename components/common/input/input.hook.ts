import {useToggle} from "../../../hooks/event-handler.hooks"
import {InputProps} from "./input.component";
import React from "react";
import {useDebounceEffect} from "../../../hooks/component.hooks";

const useInput = (props: InputProps) => {
    const {handleValidate, error} = props

    const [focused, _handleFocus] = useToggle()

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
       _handleFocus(event)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        _handleFocus(event)
        handleValidate && handleValidate(event)
    }

    // useDebounceEffect(() => {
    //     if (error) {
    //         handleValidate()
    //     }
    // }, [error])

    return {focused, handleFocus, handleBlur}
}

export default useInput
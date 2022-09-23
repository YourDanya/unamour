import {useToggle} from "../../../hooks/event-handler.hooks"
import {InputProps} from "./input.component";
import React from "react";
import {useDebounceEffect} from "../../../hooks/component.hooks";

const useInput = (props: InputProps) => {
    const {handleValidate, error, name, value} = props

    const [focused, _handleFocus] = useToggle()

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
       _handleFocus(event)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        _handleFocus(event)
        handleValidate && handleValidate(name)
    }

    useDebounceEffect(() => {
        if (handleValidate && error) {
            handleValidate(name)
        }
    }, [value])

    return {focused, handleFocus, handleBlur}
}

export default useInput
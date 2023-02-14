import React from "react"
import footerContent from "./footer.content"
import {useModal} from 'hooks/component/component.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import {useState} from 'react'
import {useRef} from 'react'

const useFooter = () => {
    const [transl, content] = useLocale(footerContent)
    const {inputs, onChange} = useInput(content.input)
    const [modal, showModal, hideModal] = useModal({links: false})

    const [focused, setFocused] = useState(false)
    const focusRef = useRef(false)

    const onFocus = () => {
        focusRef.current=!focusRef.current
        setFocused(focusRef.current)
    }

    return {onChange, modal, showModal, hideModal, content, transl, inputs, onFocus, focused}
}

export default useFooter
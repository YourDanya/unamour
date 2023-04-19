import React from "react"
import {useModal} from 'app/[locale]/_common/hooks/component/component.hooks'
import {useRef} from 'react'
import {useState} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import footerContent from 'app/[locale]/_components/layout/footer/footer.content'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'

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
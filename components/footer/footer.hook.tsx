import React from "react"
import footerContent from "./footer.content"
import {useModal} from 'hooks/component/component.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'

const useFooter = () => {

    const [transl, content] = useLocale(footerContent)
    const {inputs, handleChange} = useInput(content.input)
    const [modal, showModal, hideModal] = useModal({links: false})

    return {handleChange, modal, showModal, hideModal, content, transl, inputs}
}

export default useFooter
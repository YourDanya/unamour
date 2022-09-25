import React from "react"
import {useModal} from "../../hooks/component.hooks"
import footerContent from "./footer.content"
import {useLocale} from "../../hooks/event-handler.hooks"
import {useInput} from "../../hooks/input/input.hooks"

const useFooter = () => {

    const [content, transl] = useLocale(footerContent)
    const {inputs, handleChange} = useInput(content.input)
    const [modal, showModal, hideModal] = useModal({links: false})

    return {handleChange, modal, showModal, hideModal, content, transl, inputs}
}

export default useFooter
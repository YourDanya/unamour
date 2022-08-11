import {useInput} from "../../hooks/input.hooks"
import React from "react"
import {useModal} from "../../hooks/component.hooks"

const useFooter = () => {
    const [footer, handleChange] = useInput({email: {value: '', validations: {isEmail: true}}})

    const [modal, showModal, hideModal] = useModal({links: false})

    return {footer, handleChange, modal, showModal, hideModal}
}

export default useFooter
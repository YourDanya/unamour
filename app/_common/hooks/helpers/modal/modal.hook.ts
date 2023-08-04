import {useState} from 'react'
import {MouseEvent} from 'react'
import {UseModal} from 'app/_common/hooks/helpers/modal/modal.types'

const useModal: UseModal = (_initState, attribute = 'name') => {
    type ModalProp = keyof typeof _initState & 'modal'
    type ModalState = Record<keyof typeof _initState, boolean> & Record<'modal', boolean>

    const initState = _initState as ModalState

    if (('modal' in initState)) {
        initState.modal = false
    }

    const [modalState, setModalState] = useState(initState)

    const closeModal = () => {
        const newState: typeof modalState = {} as typeof modalState
        for (let prop in modalState) {
            const modalProp = prop as ModalProp
            newState[modalProp] = false
        }
        setModalState(newState)
    }

    const showModal = (event: MouseEvent<HTMLElement> | string) => {
        const newState: typeof modalState = {} as typeof modalState

        for (let prop in modalState) {
            const modalProp = prop as ModalProp
            newState[modalProp] = false
        }
        let name
        if (typeof event === 'string') {
            name = event as ModalProp
        } else {
            name = event.currentTarget.getAttribute(attribute) as ModalProp
        }

        newState[name] = true
        newState['modal'] = true

        setModalState(newState)
    }

    const showTopModal = (event: MouseEvent<HTMLElement>) => {
        const name = event.currentTarget.getAttribute(attribute) as ModalProp
        setModalState({...modalState, [name]: true})
    }

    const hideTopModal = (event: MouseEvent<HTMLElement>) => {
        const name = event.currentTarget.getAttribute(attribute) as ModalProp
        console.log('name', name)
        setModalState({...modalState, [name]: false})
    }

    return [modalState, showModal, closeModal, showTopModal, hideTopModal]
}

export default useModal
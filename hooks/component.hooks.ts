import React, {useState} from "react"

export const useModal = <K extends string> (initState: Record<K, boolean>, attribute: string = 'name') :
    [modalState: Record<K, boolean> & {modal: boolean}, showModal: (event: React.MouseEvent<HTMLElement>) => void, closeModal: (event: React.MouseEvent<HTMLElement>) => void]  => {

    if (!('modal' in initState)) {
        initState['modal' as K ] = false
    }

    const [modalState, setModalState] = useState(initState)

    const closeModal = (event: React.MouseEvent<HTMLElement>) => {
        const newState: typeof modalState= {} as typeof modalState
        for (let prop in modalState) {
            newState[prop] = false
        }
        setModalState(newState)
    }

    const showModal= (event: React.MouseEvent<HTMLElement>) => {
        const newState: typeof modalState= {} as typeof modalState

        for (let prop in modalState) {
            newState[prop] = false
        }

        const name = event.currentTarget.getAttribute(attribute) as keyof typeof modalState
        newState[name] = true
        newState['modal' as K] = true

        setModalState(newState)
    }

    return [modalState as Record<K, boolean> & { modal: boolean}, showModal, closeModal]
}


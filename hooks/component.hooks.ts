import React, {useEffect, useState} from "react"

export const useModal = <K extends string> (initState: Record<K, boolean>, attribute: string = 'name') :
    [modalState: Record<K, boolean> & {modal: boolean}, showModal: (event: React.MouseEvent<HTMLElement>) => void, closeModal: () => void]  => {

    if (!('modal' in initState)) {
        initState['modal' as K ] = false
    }

    const [modalState, setModalState] = useState(initState)

    const closeModal = () => {
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

export const useExternalState = <T,> (state: T | undefined, setState: ((state: T) => void) | undefined, defaultState: T):
    [state: T, setState: ((state: T) => void)]=> {

    const [state_, setState_] = useState(state ?? defaultState)

    return setState!==undefined && state!==undefined ? [state, setState] : [state_, setState_]
}

export const useResizeObserve =  (callback: (() => void), ...elements: HTMLElement []) => {

    useEffect(() => {

        const resizeObserver = new ResizeObserver(callback)
        elements.length===0 && elements.push(document.body)
        elements.forEach(elem => resizeObserver.observe(elem))

        return () => {
            elements.forEach(elem => resizeObserver.unobserve(elem))
        }
    }, [])

}

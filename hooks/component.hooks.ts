import React, {DependencyList, EffectCallback, useEffect, useLayoutEffect, useRef, useState} from "react"

export type UseModal = <K extends string> (initState: Record<K, boolean> & Record<'modal', boolean>, attribute?: string) =>
[modalState: Record<K, boolean> & Record<'modal', boolean>, showModal: (event: React.MouseEvent<HTMLElement>) => void, closeModal: () => void,
    showTopModal: (event: React.MouseEvent<HTMLElement>) => void, hideTopModal: (event: React.MouseEvent<HTMLElement>) => void,]

export const useModal : UseModal = (initState, attribute = 'name')  => {

    type ModalProp = keyof typeof modalState & 'modal'

    if (('modal' in initState)) {
        initState.modal = false
    }

    const [modalState, setModalState] = useState(initState)

    const closeModal = () => {
        const newState: typeof modalState= {} as typeof modalState
        for (let prop in modalState) {
            const modalProp = prop as ModalProp
            newState[modalProp] = false
        }
        setModalState(newState)
    }

    const showModal= (event: React.MouseEvent<HTMLElement>) => {
        const newState: typeof modalState= {} as typeof modalState

        for (let prop in modalState) {
            const modalProp = prop as ModalProp
            newState[modalProp] = false
        }

        const name = event.currentTarget.getAttribute(attribute) as ModalProp
        newState[name] = true
        newState['modal'] = true

        setModalState(newState)
    }

    const showTopModal = (event: React.MouseEvent<HTMLElement>) => {
        const name = event.currentTarget.getAttribute(attribute) as ModalProp
        setModalState({...modalState, [name] : true})
    }

    const hideTopModal = (event: React.MouseEvent<HTMLElement>) => {
        const name = event.currentTarget.getAttribute(attribute) as ModalProp
        console.log('name', name)
        setModalState({...modalState, [name] : false})
    }

    return [modalState, showModal, closeModal, showTopModal, hideTopModal]
}

export const useExternalState = <T, K> (state: T | undefined, setState: ((state: T) => void) | undefined, defaultState: T):
[state: T, setState: ((state: T) => void)] => {

    const [state_, setState_] = useState(state ?? defaultState)
    if (state!==undefined) return [state, setState as (state: T) => void]
    else return [state_, setState_]
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

export const useLayoutResizeObserve = (callback: (() => void), ...elements: HTMLElement []) => {

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(callback)
        elements.length===0 && elements.push(document.body)
        elements.forEach(elem => resizeObserver.observe(elem))

        return () => {
            elements.forEach(elem => resizeObserver.unobserve(elem))
        }
    }, [])
}

export const useOmitFirstEffect = <T extends any[], > (effect: EffectCallback, deps?: DependencyList) => {
    const first = useRef(true)
    
    useEffect(() => {
        if (first.current) {
            first.current = false
            return
        }
        effect()
    }, deps)
}

export const useDebounceEffect = <T extends any[], > (effect: EffectCallback, deps: DependencyList, delay = 1000, condition = true) => {

    let timeout = useRef<NodeJS.Timeout>()

    useEffect(() => {
        if (timeout.current && condition) {
            clearTimeout(timeout.current)
        }
        timeout.current = setTimeout(() => {
            effect()
        }, delay)
    }, deps)
}
import {DependencyList} from 'react'
import {useEffect} from 'react'
import {useRef} from 'react'
import {useLayoutEffect} from 'react'
import {EffectCallback} from 'react'
import {UseModal} from 'app/[locale]/_common/hooks/component/component.types'
import {useState} from 'react'
import {MouseEvent} from 'react'
import parseTimer from 'app/[locale]/_common/utils/helpers/parse-timer/parse-timer.util'
import useThrottle from 'app/[locale]/_common/hooks/helpers/throttle/throttle.hook'

export const useModal: UseModal = (_initState, attribute = 'name') => {
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

export const useExternalState = <T, K>(state: T | undefined, setState: ((state: T) => void) | undefined, defaultState: T):
    [state: T, setState: ((state: T) => void)] => {

    const [state_, setState_] = useState(state ?? defaultState)
    if (state !== undefined) return [state, setState as (state: T) => void]
    else return [state_, setState_]
}

export const useLayoutResizeObserve = (callback: (() => void), ...elements: HTMLElement []) => {
    useLayoutEffect(() => {
        if (elements.length > 0) {
            const resizeObserver = new ResizeObserver(callback)
            elements.forEach(elem => resizeObserver.observe(elem))
            return () => {
                elements.forEach(elem => resizeObserver.unobserve(elem))
            }
        }
        else {
            window.addEventListener('resize', callback)
            return () => {
                window.removeEventListener('resize', callback)
            }
        }
    }, [])
}

export const useOmitFirstEffect = <T extends any[], >(effect: EffectCallback, deps?: DependencyList) => {
    const first = useRef(true)

    useEffect(() => {
        if (first.current) {
            first.current = false
            return
        }
        effect()
    }, deps)
}

export const useOmitFirstLayoutEffect = <T extends any[], >(effect: EffectCallback, deps?: DependencyList) => {
    const first = useRef(true)

    useLayoutEffect(() => {
        if (first.current) {
            first.current = false
            return
        }
        effect()
    }, deps)
}




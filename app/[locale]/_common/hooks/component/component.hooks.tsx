import {DependencyList} from 'react'
import {useEffect} from 'react'
import {useRef} from 'react'
import {useLayoutEffect} from 'react'
import {EffectCallback} from 'react'
import {UseModal} from 'app/[locale]/_common/hooks/component/component.types'
import {useState} from 'react'
import {UseFirstRender} from 'app/[locale]/_common/hooks/component/component.types'
import {MouseEvent} from 'react'
import {UseTimer} from 'app/[locale]/_common/hooks/component/component.types'
import {parseTimer} from 'app/[locale]/_common/utils/main/main.utils'

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

    const showModal = (event: React.MouseEvent<HTMLElement> | string) => {
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

export const useResizeObserve = (callback: (() => void), ...elements: HTMLElement []) => {
    useEffect(() => {
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

export const useDebounceEffect = <T extends any[], >(effect: EffectCallback, deps: DependencyList, delay = 1000, condition = true) => {
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

export const useFirsRender: UseFirstRender = (callback) => {
    const isFirstRef = useRef(true)

    if (isFirstRef.current) {
        isFirstRef.current = false
        callback()
    }
}

export const useTimer: UseTimer = (params) => {
    const {timer, setTimer} = params

    useEffect(() => {
        if (!timer || timer === '00:00') {
            return
        }
        let [minutes, seconds] = timer.split(':').map((elem) => +elem)
        const allSeconds = (minutes * 60 + seconds) - 1
        minutes = Math.floor( allSeconds / 60)
        seconds = allSeconds % 60
        const newTimer = `${minutes < 10? `0${minutes}`: `${minutes}`}:${seconds < 10 ? `0${seconds}`: `${seconds}`}`

        setTimeout(() => {
            setTimer(newTimer)
        })
    }, [timer])
}
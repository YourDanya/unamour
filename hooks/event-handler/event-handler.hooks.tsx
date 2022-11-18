import React, {useRef, useState} from 'react'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'

export const useCombineHandlers = (...eventHandlers: ((event: any) => void)[]):
    (event: React.MouseEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>) => void => {

    return (event: React.MouseEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>) => {
        eventHandlers.forEach(eventHandler => eventHandler(event))
    }
}

export const useToggle = (): [active: boolean, handleEvent: (event: any) => void, setActive: (active: boolean) => void] => {
    const [active, setActive] = useState(false)
    const handleEvent = (event: any) => {
        event.preventDefault()
        setActive(!active)
    }
    return [active, handleEvent, setActive]
}

export const useDoubleToggle = (initState?: boolean, params?: { firstCond?: boolean, secondCond?: boolean }):
    [active: boolean, handleFirst: (event: React.MouseEvent<HTMLElement>) => void, handleSecond: (event: React.MouseEvent<HTMLElement>) => void] => {

    const [active, setActive] = useState(initState ?? false)

    const handleFirst = (event: React.MouseEvent<HTMLElement>) => {
        if (active && (params?.firstCond ?? true)) {
            setActive(false)
        }
    }

    const handleSecond = (event: React.MouseEvent<HTMLElement>) => {
        if (!active && (params?.secondCond ?? true)) {
            setActive(true)
        }
    }

    return [active, handleFirst, handleSecond]
}

export const useToggleMany = <T,>(initialState: Record<keyof T, boolean>, attribute: string = 'name'): [
    active: Record<keyof T, boolean>,
    handleEvent: (event: any) => void,
    setActive: (active: Record<keyof T, boolean>) => void,
    stateRef: React.MutableRefObject<any>
] => {

    const [active, setActive] = useState(initialState)
    const stateRef = useRef(initialState)

    useOmitFirstEffect(() => {
       stateRef.current = active
    }, [active])

    const handleEvent = (event: any) => {
        const property = event?.currentTarget?.getAttribute(attribute) as keyof T
        stateRef.current[property] = !stateRef.current[property]
        setActive({...stateRef.current})
    }
    return [active, handleEvent, setActive, stateRef]
}


export const useSetActive = (initActive: string, attribute: string = 'name'):
    [active: string, handleEvent: (event: any) => void, setActive: (active: string) => void] => {

    const [active, setActive] = useState(initActive)

    const handleEvent = (event: any) => {
        setActive(event.currentTarget.getAttribute(attribute))
    }

    return [active, handleEvent, setActive]
}

export const useSetNumber = (initActive: number, attribute: string):
    [active: number, handleEvent: (event: any) => void, setActive: (active: number) => void] => {

    const [active, setActive] = useState(initActive)
    const handleEvent = (event: any) => {
        setActive(+event.currentTarget.getAttribute(attribute))
    }

    return [active, handleEvent, setActive]
}

export const useToggleActive = (attribute: string = 'name'):
    [active: string | null, handleEvent: (event: React.MouseEvent<HTMLElement>) => void, ref: React.MutableRefObject<string | null>] => {

    const [active, setActive] = useState<string | null>(null)
    const ref = useRef<string|null>(null)
    const handleEvent = (event: React.MouseEvent<HTMLElement>) => {
        const value = event.currentTarget.getAttribute(attribute)
        if (active === value) {
            setActive(null)
        } else {
            const active = event.currentTarget.getAttribute(attribute)
            ref.current= active
            setActive(active)
        }
    }
    return [active, handleEvent, ref]
}

export const useSetFalseMany = <T extends readonly string[], >(arr: T, attribute: string): [active: Record<typeof arr[number], boolean>, handleEvent: (event: any) => void] => {
    const initialState: any = {}
    arr.forEach((elem) => initialState[elem] = true)
    const [active, setActive] = useState(initialState)
    const handleEvent = (event: any) => {
        setActive({...active, [event.currentTarget.getAttribute(attribute)]: false})
    }
    return [active, handleEvent]
}

export const useSetTrue = (): [active: boolean, handleEvent: (event: any) => void] => {
    const [active, setActive] = useState(false)
    const handleEvent = (event: any) => {
        setActive(true)
    }
    return [active, handleEvent]
}




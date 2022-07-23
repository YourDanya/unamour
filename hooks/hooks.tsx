import React, {useState} from "react"
import {useRouter} from "next/router"
import {LocaleType} from "../types/types"

export const useInput = <T extends readonly string[] | { [prop: string]: string }, >(inputs: T): T extends readonly string[] ?
    [values: Record<typeof inputs[number], string>, handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void] :
    [values: T, handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void] => {

    let initialState: any = {}
    if (Array.isArray(inputs)) {
        inputs.forEach((elem) => initialState[elem] = '')
    } else {
        initialState = inputs
    }
    const [values, setValues] = useState(initialState)
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setValues({...values, [name]: value})
    }

    return [values, handleInput] as T extends readonly string[] ?
        [values: Record<typeof inputs[number], string>, handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void] :
        [values: T, handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void]
}

export const useToggle = (): [active: boolean, handleEvent: (event: any) => void] => {
    const [active, setActive] = useState(false)
    const handleEvent = (event: any) => {
        setActive(!active)
    }
    return [active, handleEvent]
}

export const useToggleMany = <T extends readonly string[], >(arr: T, attribute: string = 'name'): [active: Record<typeof arr[number], boolean>, handleEvent: (event: any) => void] => {
    const initialState: any = {}
    arr.forEach((elem) => initialState[elem] = false)
    const [active, setActive] = useState(initialState)
    const handleEvent = (event: any) => {
        const property = event.target[attribute]
        setActive({...active, [property]: !active[property]})
    }
    return [active, handleEvent]
}

export const usePreventDefault = (): (event: any) => void => {
    return (event: any) => {
        event.preventDefault()
    }
}

export const useSetActive = (initActive: string, attribute: string = 'name'): [active: string, handleEvent: (event: any) => void] => {
    const [active, setActive] = useState(initActive)
    const handleEvent = (event: any) => {
        setActive(event.target[attribute])
    }
    return [active, handleEvent]
}

export const useToggleActive = (attribute: string = 'name'): [active: string | null, handleEvent: (event: React.MouseEvent<HTMLElement>) => void] => {
    const [active, setActive] = useState<string | null>(null)
    const handleEvent = (event: React.MouseEvent<HTMLElement> & { target: { [attribute: string]: string } }) => {
        const value = event.target[attribute]
        if (active === value) {
            setActive(null)
        } else {
            setActive(event.target[attribute])
        }
    }
    return [active, handleEvent as (event: React.MouseEvent<HTMLElement>) => void]
}


export const useSetFalseMany = <T extends readonly string[], >(arr: T, attribute: string): [active: Record<typeof arr[number], boolean>, handleEvent: (event: any) => void] => {
    const initialState: any = {}
    arr.forEach((elem) => initialState[elem] = true)
    const [active, setActive] = useState(initialState)
    const handleEvent = (event: any) => {
        setActive({...active, [event.target[attribute]]: false})
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

export const useMatchUrl = (url: string): [match: boolean] => {
    return [useRouter().pathname === url]
}

export const useLocale = <T, K>(content: { translation: { ua: T, eng: T, ru: T } } & K) : [content:  Omit<{translation: {ua: T, eng: T, ru: T}} & K, "translation">, translation: T] => {
    const locale = useRouter().locale as LocaleType
    const {translation, ...other} = content
    return [{...other}, translation[locale]]
}
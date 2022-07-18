import React, {useState} from "react"
import {useRouter} from "next/router";

export const useInput = <T extends readonly string[], >(arr: T): [values: Record<typeof arr[number], string>, handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void] => {
    const initialState: any = {}
    arr.forEach((elem) => initialState[elem] = '')
    const [values, setValues] = useState(initialState)
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setValues({...values, [name]: value})
    }
    return [values, handleInput]
}

export const useToggle = (): [active: boolean, handleEvent: (event: any) => void] => {
    const [active, setActive] = useState(false)
    const handleEvent = (event: any) => {
        console.log(event.target.value)
        setActive(!active)
    }
    return [active, handleEvent]
}

export const useToggleMany = <T extends readonly string[], > (arr: T, attribute: string): [active: Record<typeof arr[number], boolean>, handleEvent: (event: any) => void] => {
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

export const useSetFalseMany = <T extends readonly string[], > (arr: T, attribute: string): [active: Record<typeof arr[number], boolean>, handleEvent: (event: any) => void] => {
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

import React, {useState} from "react"

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
        setActive(!active)
    }
    return [active, handleEvent]
}

export const usePreventDefault = (): (event: any) => void => {
    return (event: any) => {
        event.preventDefault()
    }
}
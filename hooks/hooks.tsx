import React, {useState} from "react"
import {useRouter} from "next/router"
import {LocaleType} from "../types/types"

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

export const useImages = (urls: string[], className?: string) => {
    return urls.map((url, index) => <img className={className} src={url} alt={`image ${index}`} key={url + index}/>)
}

export const useLocale = <T, K>(content: { translation: { ua: T, eng: T, ru: T } } & K) : [content:  Omit<{translation: {ua: T, eng: T, ru: T}} & K, "translation">, translation: T] => {
    const locale = useRouter().locale as LocaleType
    const {translation, ...other} = content
    return [{...other}, translation[locale]]
}

export const useLocaleMerge = <T, K>(content: { translation: { ua: T, eng: T, ru: T } } & K) : [content:  Omit<{translation: {ua: T, eng: T, ru: T}} & K, "translation">, translation: T] => {
    const locale = useRouter().locale as LocaleType
    const {translation, ...other} = content
    const translateContent = translation[locale]

    return [{...other}, translation[locale]]
}

// export const mergeObjects  = <T, K> (obj1: T, obj2: K) => {
//     const newObj: Partial<T> & Partial<K>  = {} as Partial<T> & Partial<K>
//     for (let prop in obj1) {
//         if (prop in obj2) {
//             // prop = prop as keyof typeof obj2
//             const prop1 = obj1[prop]
//             if (Array.isArray(prop1) && Array.isArray(obj2[prop])) {
//                 newObj[prop] = [] as T[typeof prop]
//                 let arr = obj1[prop] as []
//                 prop1.forEach((elem, index) => {
//                     (newObj[prop] as []).push({...elem, ...obj2[prop][index]})
//                 })
//             }
//             else {
//                 newObj[prop] = {...obj1[prop], ...obj2[prop]}
//             }
//         } else {
//             newObj[prop] = {...obj1[prop]}
//         }
//     }
//     for (let prop in obj2) {
//         if (!(prop in obj1)) {
//             newObj[prop] = {...obj2[prop]}
//         }
//     }
//     return newObj
// }
//
// type T = {
//     a: {
//         ddd: number
//     },
//     b: string
//     arr: [{a: string, b:number}, {a: string, b : number}]
// }
//
// type K = {
//     a: {
//         dd: string,
//         fff: string
//     },
//     c : number,
// }
//
// type MergeObjects <T, K> =  Pick<T, keyof T> & Pick<K, keyof K>
//
// type MergeTK = MergeObjects<T, K>
//
// let mergeTK : MergeTK ={} as MergeTK



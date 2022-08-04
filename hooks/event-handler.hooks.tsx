import React, {useState} from "react"
import {useRouter} from "next/router"
import {LocaleType} from "../types/types"

export const useCombineHandlers = (...eventHandlers: ((event: React.MouseEvent<HTMLElement>) => void)[]):  (event: React.MouseEvent<HTMLElement>) => void => {

    const handleEvent = (event: React.MouseEvent<HTMLElement>) => {
        eventHandlers.forEach(eventHandler => eventHandler(event))
    }

    return handleEvent
}

export const useToggle = (): [active: boolean, handleEvent: (event: any) => void] => {
    const [active, setActive] = useState(false)
    const handleEvent = (event: any) => {
        setActive(!active)
    }
    return [active, handleEvent]
}

export const useDoubleToggle = (initState? : boolean, params? : {firstCond?: boolean, secondCond?: boolean}):
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

export const useToggleMany = <T extends readonly string[], >(arr: T, attribute: string = 'name'):
    [active: Record<typeof arr[number], boolean>, handleEvent: (event: any) => void] => {

    const initialState: any = {}
    arr.forEach((elem) => initialState[elem] = false)
    const [active, setActive] = useState(initialState)
    const handleEvent = (event: any) => {
        const property = event.currentTarget.getAttribute(attribute)
        setActive({...active, [property]: !active[property]})
    }
    return [active, handleEvent]
}

export const usePreventDefault = (): (event: any) => void => {
    return (event: any) => {
        event.preventDefault()
    }
}

export const useSetActive = (initActive:string, attribute: string = 'name'):
    [active: string , handleEvent: (event: any) => void, setActive: (active: string) => void]  => {

    const [active, setActive] = useState(initActive)

    const handleEvent = (event: any) => {
        setActive(event.currentTarget.getAttribute(attribute))
    }

    return [active, handleEvent, setActive]
}

export const useSetNumber = (initActive: number, attribute: string):
    [active: number , handleEvent: (event: any) => void, setActive: (active: number) => void] => {

    const [active, setActive] = useState(initActive)
    const handleEvent = (event: any) => {
        setActive(+event.currentTarget.getAttribute(attribute))
    }

    return [active, handleEvent, setActive]
}

export const useToggleActive = (attribute: string = 'name'): [active: string | null, handleEvent: (event: React.MouseEvent<HTMLElement>) => void] => {
    
    const [active, setActive] = useState<string | null>(null)
    const handleEvent = (event: React.MouseEvent<HTMLElement>) => {
        const value = event.currentTarget.getAttribute(attribute)
        if (active === value) {
            setActive(null)
        } else {
            setActive(event.currentTarget.getAttribute(attribute))
        }
    }
    return [active, handleEvent as (event: React.MouseEvent<HTMLElement>) => void]
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

export const useMatchUrl = (url: string): [match: boolean] => {
    return [useRouter().pathname === url]
}

export const useMapImages = (urls: string[], className?: string) => {
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

export type Merged<T, K> = Omit<T & K, keyof (T | K)> & Pick<T & K, keyof (T | K)>

// export const mergeObjects  = <T, K> (obj1: T, obj2: K) => {
//     const newObj: Merged<T, K> = {} as Merged<T, K>
//
//     for (let prop in obj1) {
//         if (prop in obj2) {
//             // prop = prop as keyof typeof obj2
//             const prop1 = obj1[prop]
//             if (Array.isArray(prop1) && Array.isArray(obj2[prop])) {
//                 newObj[prop] = []
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



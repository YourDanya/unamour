import {createContext} from 'react'
import {MutableRefObject} from 'react'
import {useRef} from 'react'

export type AdminItemsContext = {
    slugs: Record<string, string>,
    setSlugs: (slugs: Record<string, string>) => void,
    slugsRef: MutableRefObject<Record<string, string>>,
    testRef: any
}

export const AdminItemsContext = createContext<AdminItemsContext>({
    slugs: {},
    setSlugs: (slugs) => {},
    slugsRef: {},
    testRef: {}
} as AdminItemsContext)
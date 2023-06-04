import {MutableRefObject} from 'react'

export type NavStore = {
    secondBlockRef: MutableRefObject<HTMLElement | null> | null,
    setSecondBlockRef: (seconBlockRef: MutableRefObject<HTMLElement | null> | null) => void
}
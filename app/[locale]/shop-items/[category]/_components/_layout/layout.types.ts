import {MutableRefObject} from "react"
import React from 'react'

export type SortState = string
export type GenState = Record<string, boolean>
export type PriceState = {min: string, max: string}

export type State = SortState | GenState | PriceState
export type SetState = (state: State) => void
export type ResetFilter = (filter: string, setState: SetState, toUpdate: MutableRefObject<boolean>, state?: State) => void

export type GeneralContent = string[]

export type Color = {slug: string, code: string}
export type ColorContent = Color []
export type ColorRecord = Record<string, Color>
export type PriceContent = {min: string, max: string}
export type FilterContent = GeneralContent | ColorContent | PriceContent

export type FilterProps =  {
    content: ColorContent | GeneralContent | PriceContent,
    filter: string,
    filters: string[],
}

export type UseFilter = (filterProps: FilterProps) => [state: State, setState: SetState]

export type HandleFilter = (toUpdate: MutableRefObject<boolean>, filters: string[], filter: string, state: State) => void

export type LayoutProps = {
    children?: React.ReactNode
}
import {MutableRefObject} from "react"

export type SortState = string
export type GenState = Record<string, boolean>
export type PriceState = {min: string, max: string}

export type State = SortState | GenState | PriceState

export type SetSortState = (state: SortState) => void
export type SetGenState = (state: GenState) => void
export type SetState = (state: State) => void

export type ResetFilter1 = (filter: string, setState: SetSortState, toUpdate: MutableRefObject<boolean>) => void
export type ResetFilter2 = (filter: string, setState: SetGenState, toUpdate: MutableRefObject<boolean>, state?: State) => void
export type ResetFilter = (filter: string, setState: SetState, toUpdate: MutableRefObject<boolean>, state?: State) => void

export type GetStateR1 = (filter: string) => string
export type GetStateR2 = (filter: string) => Record<string, boolean>

export type GeneralContent = string[]
export type ColorContent = {param: string, code: string} []
export type PriceContent = {min: string, max: string}
export type FilterContent = GeneralContent | ColorContent | PriceContent

export type GeneralRecord = Record<string, GeneralContent>
export type ColorRecord = Record<string, ColorContent>
export type PriceRecord = Record<string, {min: number, max: number}>
export type FilterRecord = Record<string, FilterContent>

export type FilterProps =  {
    content: ColorContent | GeneralContent | PriceContent,
    filter: string,
    filters: string[],
}

export type UseFilter = (filterProps: FilterProps) => [state: State, setState: SetState]

export type HandleFilter = (toUpdate: MutableRefObject<boolean>, filters: string[], filter: string, state: State) => void
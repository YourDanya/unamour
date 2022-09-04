import {MutableRefObject} from "react"

export type State1 = string
export type State2 = Record<string, boolean>
export type State = State1 | State2

export type SetState1 = (state: State1) => void
export type SetState2 = (state: State2) => void
export type SetState = (state: State) => void

export type ResetFilter1 = (filter: string, setState: SetState1, toUpdate: MutableRefObject<boolean>) => void
export type ResetFilter2 = (filter: string, setState: SetState2, toUpdate: MutableRefObject<boolean>, state?: State) => void
export type ResetFilter = (filter: string, setState: SetState, toUpdate: MutableRefObject<boolean>, state?: State) => void

export type GetStateR1 = (filter: string) => string
export type GetStateR2 = (filter: string) => Record<string, boolean>

export type GeneralContent = string[]
export type ColorContent = {param: string, code: string} []

export type GeneralRecord = Record<string, GeneralContent>
export type ColorRecord = Record<string, ColorContent>

export type FilterContent = GeneralContent | ColorContent
export type FilterRecord = Record<string, FilterContent>

export type FilterProps =  {
    content: ColorContent | GeneralContent,
    filter: string,
    filters: string[],
}

export type UseFilter = (filterProps: FilterProps) => [state: State, setState: SetState]
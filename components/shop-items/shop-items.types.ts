import {MutableRefObject} from "react";

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
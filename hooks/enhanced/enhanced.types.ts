import {DefaultRootState} from 'react-redux'

export type UseDebounce = {}

export type UseShallSelector = <TState = DefaultRootState, TSelected = unknown>
(selector: (state: TState) => TSelected) => TSelected

export type UseArgSelector = <TArgs extends any[], TState = DefaultRootState, TSelected = unknown>
(callback: (...args: TArgs) => ((state: TState) => TSelected) , ...args: TArgs) => TSelected
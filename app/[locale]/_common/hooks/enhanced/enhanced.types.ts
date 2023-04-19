import {DefaultRootState} from 'react-redux'
import {useEffect} from 'react'
import {MutableRefObject} from 'react'

export type UseShallSelector = <TState = DefaultRootState, TSelected = unknown>
(selector: (state: TState) => TSelected) => TSelected

export type UseParamSelector = <TParams extends any[], TState = DefaultRootState, TSelected = unknown>
(paramSelector: (...params: TParams) => ((state: TState) => TSelected) , ...params: TParams) => TSelected

export type UseRefSelector = <TParams extends any[], TState = DefaultRootState, TSelected = unknown>
(paramSelector: (...params: TParams) => ((state: TState) => TSelected) , ...params: TParams) => MutableRefObject<TSelected>

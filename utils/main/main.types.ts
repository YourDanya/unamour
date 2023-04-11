import {StateField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'
import {Locale} from 'types/types'
import {SelectField} from 'redux/store.types'
import {ServerError} from 'redux/store.types'
import {AppState} from 'redux/store'

export type MapField = <TField extends string> (field: TField, stateField: StateField, locale: Locale, errors: ContentErrors,
                        success: ContentSuccess) => SelectField

export type GetError = <TField extends string,> (field: TField,error: ServerError | null, contentErrors: ContentErrors, locale: Locale) => string

export type NullObj = <TObj> (obj: TObj) => TObj

export type GetLocalStorage = <K extends keyof AppState> (key : K) => AppState[K]

export type DoubleNode<T> = {prev?: DoubleNode<T>, value: T, next?: DoubleNode<T>}

export type CreateDoubleLinkedList =<T> (arr: T[]) => DoubleNode<T>

export type Peek = <TObj extends object, TKeys extends (keyof TObj)[]>
(object: TObj, keys: TKeys) => PeekedObject<TObj, TKeys>

export type PeekedObject<TObj extends object, TKeys extends (keyof TObj)[]> = {
    [TKey in TKeys[number]] : TObj[TKey]
}

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
type DeepWriteable<T> = {-readonly [P in keyof T]: DeepWriteable<T[P]> };
type Cast<X, Y> = X extends Y ? X : Y
type FromEntries<T> = T extends [infer Key, any][]
    ? { [K in Cast<Key, string>]: Extract<ArrayElement<T>, [K, any]>[1]}
    : { [key in string]: any }

export type FromEntriesWithReadOnly<T> = FromEntries<DeepWriteable<T>>
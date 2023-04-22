import {Locale} from 'app/[locale]/_common/types/types'

export type NullObj = <TObj> (obj: TObj) => TObj

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
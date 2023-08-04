export type Peek = <TObj extends object, TKeys extends (keyof TObj)[]>
(object: TObj, keys: TKeys) => PeekedObject<TObj, TKeys>

export type PeekedObject<TObj extends object, TKeys extends (keyof TObj)[]> = {
    [TKey in TKeys[number]] : TObj[TKey]
}
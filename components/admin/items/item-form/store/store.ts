import {createContext} from 'react'
import {create} from 'zustand'
import {StoreApi} from 'zustand/esm'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {useContext} from 'react'
import {useStore} from 'zustand'
import {useRef} from 'react'
import {MutableRefObject} from 'react'

export type ItemFormState = {
    errorCount: number,
    errorCountRef: MutableRefObject<number>,
    setErrorCount: (errorCount: number) => void,
    itemValue: FetchedItem,
    itemValueRef: MutableRefObject<FetchedItem>,
    setItemValue: (itemValue: FetchedItem) => void
}

export type ItemFormInitState = {itemValue: FetchedItem}

export const ItemFormContext = createContext<StoreApi<ItemFormState>>({} as StoreApi<ItemFormState>)

export const createItemFormStore = ({itemValue}: ItemFormInitState) =>
    create<ItemFormState>((set) => ({
        errorCount: 0,
        errorCountRef: useRef(0),
        setErrorCount: (errorCount) => set({errorCount}),
        itemValue,
        itemValueRef: useRef(JSON.parse(JSON.stringify(itemValue))),
        setItemValue: (itemValue) => set({itemValue})
    }))

export type UseItemFormContext = <T> (
    selector: (state: ItemFormState) => T,
    equalityFn?: (left: T, right: T) => boolean
) => T

export const useItemFormContext: UseItemFormContext = (selector, equalityFn) => {
    const store = useContext(ItemFormContext)
    return useStore(store, selector, equalityFn)
}

export type ItemFormMain = Omit<ItemFormState, 'itemValue' | 'errorCount'>

export type SelectItemFormMain = (state: ItemFormState) => ItemFormMain

export const selectItemFormMain: SelectItemFormMain = (state) => {
    const {itemValue, errorCount, ...otherState} = state
    return otherState
}
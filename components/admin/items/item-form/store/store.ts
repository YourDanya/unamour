import {createContext} from 'react'
import {create} from 'zustand'
import {StoreApi} from 'zustand/esm'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {useContext} from 'react'
import {useStore} from 'zustand'
import {useRef} from 'react'
import {MutableRefObject} from 'react'
import {ItemImagesValues} from 'components/admin/items/item-form/item-form.types'

export type ItemFormState = {
    errorCount: number,
    errorCountRef: MutableRefObject<number>,
    setErrorCount: (errorCount: number) => void,
    itemValue: FetchedItem,
    itemValueRef: MutableRefObject<FetchedItem>,
    setItemValue: (itemValue: FetchedItem) => void,
    itemImagesValues: ItemImagesValues,
    setItemImagesValues: (itemImagesValues: ItemImagesValues) => void,
    itemImagesValuesRef:MutableRefObject<ItemImagesValues>
}

export type ItemFormInitState = {itemValue: FetchedItem, itemImagesValues: ItemImagesValues}

export const ItemFormContext = createContext<StoreApi<ItemFormState>>({} as StoreApi<ItemFormState>)

export const createItemFormStore = ({itemValue, itemImagesValues}: ItemFormInitState) =>
    create<ItemFormState>((set) => ({
        errorCount: 0,
        errorCountRef: useRef(0),
        setErrorCount: (errorCount) => set({errorCount}),
        itemValue,
        itemValueRef: useRef(JSON.parse(JSON.stringify(itemValue))),
        setItemValue: (itemValue) => set({itemValue}),
        itemImagesValues,
        setItemImagesValues: (itemImagesValues) => set({itemImagesValues}),
        itemImagesValuesRef: useRef(JSON.parse(JSON.stringify(itemImagesValues)))
    }))

export type UseItemFormContext = <T> (
    selector: (state: ItemFormState) => T,
    equalityFn?: (left: T, right: T) => boolean
) => T

export const useItemFormContext: UseItemFormContext = (selector, equalityFn) => {
    const store = useContext(ItemFormContext)
    return useStore(store, selector, equalityFn)
}

export type ItemFormMain = Omit<ItemFormState, 'itemValue' | 'errorCount' | 'itemImagesValues'>

export type SelectItemFormMain = (state: ItemFormState) => ItemFormMain

export const selectItemFormMain: SelectItemFormMain = (state) => {
    const {itemImagesValues: _, errorCount: __, itemValue: ___, ...other} = state
    return other
}
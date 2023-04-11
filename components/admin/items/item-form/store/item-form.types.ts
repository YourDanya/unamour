import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {ItemImagesValues} from 'components/admin/items/item-form/item-form.types'
import {ItemImagesMap} from 'components/admin/items/item-form/item-form.types'

export type ItemFormState = {
    errorCount: number,
    errorCountRef: MutableRefObject<number>,
    setErrorCount: (errorCount: number) => void,
    itemValue: FetchedItem,
    itemValueRef: MutableRefObject<FetchedItem>,
    setItemValue: (itemValue: FetchedItem) => void,
    itemImagesValues: ItemImagesValues,
    setItemImagesValues: (itemImagesValues: ItemImagesValues) => void,
    itemImagesValuesRef: MutableRefObject<ItemImagesValues>,
    initItemImagesMapRef: MutableRefObject<ItemImagesMap>,
    modalState: ModalState,
    setModalState: (modalState: ModalState) => void,
    closeModal: () => void,
    showModal: (name: keyof ModalState) => void
}

export type ModalState = {
    deleteItem: boolean
    modal: boolean
}

export type ItemFormInitState = {
    itemValue: FetchedItem,
}

export type UseItemFormStore = <T> (
    selector: (state: ItemFormState) => T,
    equalityFn?: (left: T, right: T) => boolean
) => T

export type ItemFormMain = Omit<ItemFormState, 'itemValue' | 'errorCount' | 'itemImagesValues'>

export type SelectItemFormMain = (state: ItemFormState) => ItemFormMain

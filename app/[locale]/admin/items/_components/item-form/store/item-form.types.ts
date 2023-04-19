import {MutableRefObject} from 'react'
import {FetchedItem} from 'app/[locale]/_redux/shop-items/shop-items.types'
import {ItemImagesMap} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ItemImagesValues} from 'app/[locale]/admin/items/_components/item-form/item-form.types'

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

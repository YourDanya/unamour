import {MutableRefObject} from 'react'
import {FetchedItem} from 'app/_common/types/fetched-item'
import {ItemImagesMap} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ItemImagesValues} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {AdminItem} from 'app/[locale]/admin/items/_components/store/admin-items.types'

export type ItemFormState = {
    errorCount: number,
    errorCountRef: MutableRefObject<number>,
    setErrorCount: (errorCount: number) => void,
    itemValue: FetchedItem,
    itemValueRef: MutableRefObject<AdminItem>,
    setItemValue: (itemValue: AdminItem) => void,
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

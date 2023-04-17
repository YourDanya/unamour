import {createContext} from 'react'
import {create} from 'zustand'
import {StoreApi} from 'zustand/esm'
import {useContext} from 'react'
import {useStore} from 'zustand'
import {useRef} from 'react'
import {createItemImagesMap} from 'components/admin/items/item-form/utils/item-form.utils'
import {UseItemFormStore} from 'components/admin/items/item-form/store/item-form.types'
import {SelectItemFormMain} from 'components/admin/items/item-form/store/item-form.types'
import {ItemFormInitState} from 'components/admin/items/item-form/store/item-form.types'
import {ItemFormState} from 'components/admin/items/item-form/store/item-form.types'
import {createItemImagesValues} from 'components/admin/items/item-form/utils/item-form.utils'
import {ModalState} from 'components/admin/items/item-form/store/item-form.types'
import {getEntries} from 'utils/main/main.utils'
import {createFromEntries} from 'utils/main/main.utils'

export const ItemFormContext = createContext<StoreApi<ItemFormState>>({} as StoreApi<ItemFormState>)

export const createItemFormStore = ({itemValue}: ItemFormInitState) => {
    const itemImagesValues = createItemImagesValues({itemValue})

    return create<ItemFormState>((set) => ({
        errorCount: 0,
        errorCountRef: useRef(0),
        setErrorCount: (errorCount) => set({errorCount}),
        itemValue,
        itemValueRef: useRef(JSON.parse(JSON.stringify(itemValue))),
        setItemValue: (itemValue) => set({itemValue}),
        itemImagesValues,
        setItemImagesValues: (itemImagesValues) => set({itemImagesValues}),
        itemImagesValuesRef: useRef(JSON.parse(JSON.stringify(itemImagesValues))),
        initItemImagesMapRef: useRef(createItemImagesMap({itemValue, itemImagesValues})),
        modalState: {deleteItem: false, modal: false},
        setModalState: (modalState: ModalState) => set({modalState}),
        closeModal: () => set((state) => {
            let {modalState} = state
            modalState = createFromEntries(getEntries(modalState).map(([key, value]) => {
                return [key, !value]
            }))
            return {modalState}
        }),
        showModal: (name: keyof ModalState) => set((state) => {
            let {modalState} = state
            return {modalState: {...modalState, modal: true, [name]: true}}
        })
    }))
}


export const useItemFormStore: UseItemFormStore = (selector, equalityFn) => {
    const store = useContext(ItemFormContext)
    return useStore(store, selector, equalityFn)
}

export const selectItemFormMain: SelectItemFormMain = (state) => {
    const {itemImagesValues: _, errorCount: __, itemValue: ___, ...other} = state
    return other
}
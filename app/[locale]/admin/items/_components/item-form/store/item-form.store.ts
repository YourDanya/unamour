import {createContext} from 'react'
import {create} from 'zustand'
import {StoreApi} from 'zustand/esm'
import {useContext} from 'react'
import {useStore} from 'zustand'
import {useRef} from 'react'
import {createItemImagesMap} from 'app/[locale]/admin/items/_components/item-form/utils/item-form.utils'
import {UseItemFormStore} from 'app/[locale]/admin/items/_components/item-form/store/item-form.types'
import {createFromEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {createItemImagesValues} from 'app/[locale]/admin/items/_components/item-form/utils/item-form.utils'
import {SelectItemFormMain} from 'app/[locale]/admin/items/_components/item-form/store/item-form.types'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {ItemFormInitState} from 'app/[locale]/admin/items/_components/item-form/store/item-form.types'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/store/item-form.types'
import {ModalState} from 'app/[locale]/admin/items/_components/item-form/store/item-form.types'

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
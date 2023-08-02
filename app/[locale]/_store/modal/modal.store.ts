import {create} from 'zustand'
import {ModalStore} from 'app/[locale]/_store/modal/modal.types'
import {ModalState} from 'app/[locale]/_store/modal/modal.types'
import getKeys from 'app/[locale]/_common/utils/typescript/get-keys/get-keys.utils'

const useModalStore = create<ModalStore>((set) => ({
    modalState: {hamburger: false, search: false, shopping: false, sign: false, modal: false},
    showModal: (modalProp) => set((state) => {
        return {
            modalState: {...state.modalState, modal: true, [modalProp]: true}
        }
    }),
    hideModal: () => set((state) => {
        const newModalState = getKeys(state.modalState).reduce((modalState,key) => {
            modalState[key] = false
            return modalState
        }, {} as ModalState)
        return {
            modalState: {...newModalState}
        }
    }),
    hideTopModal: (modalProp) => set((state) => {
        const shouldModal = Object.entries(state.modalState).some(([key, value]) => {
            if (key !== modalProp && key !== 'modal' && value) {
                return true
            }
        })
        return {
            modalState: {...state.modalState, [modalProp]: false, modal: shouldModal}
        }
    })
}))

export default useModalStore
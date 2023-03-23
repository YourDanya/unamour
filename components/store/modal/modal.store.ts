import {create} from 'zustand'
import {ModalState, ModalStore} from 'components/store/modal/modal.types'

const useModalStore = create<ModalStore>((set) => ({
    modalState: {hamburger: false, search: false, shopping: false, sign: false, modal: false},
    showModal: (modalProp) => set((state) => {
        return {
            modalState: {...state.modalState, modal: true, [modalProp]: true}
        }
    }),
    hideModal: () => set((state) => {
        const newModalState = Object.keys(state.modalState).reduce((modalState,key) => {
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
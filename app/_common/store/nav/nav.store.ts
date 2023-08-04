import {create} from 'zustand'
import {ModalStore} from 'app/_common/store/modal/modal.types'
import getKeys from 'app/_common/utils/typescript/get-keys/get-keys.utils'
import {ModalState} from 'app/_common/store/modal/modal.types'
import {NavStore} from 'app/_common/store/nav/nav.types'
import {useRef} from 'react'

const useNavStore = create<NavStore>((set) => ({
    secondBlockRef: null,
    setSecondBlockRef: (secondBlockRef) => set({secondBlockRef})
}))

export default useNavStore
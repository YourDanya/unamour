import {create} from 'zustand'
import {ModalStore} from 'app/[locale]/_store/modal/modal.types'
import {getKeys} from 'app/[locale]/_common/utils/main/main.utils'
import {ModalState} from 'app/[locale]/_store/modal/modal.types'
import {NavStore} from 'app/[locale]/_store/nav/nav.types'
import {useRef} from 'react'

const useNavStore = create<NavStore>((set) => ({
    secondBlockRef: null,
    setSecondBlockRef: (secondBlockRef) => set({secondBlockRef})
}))

export default useNavStore
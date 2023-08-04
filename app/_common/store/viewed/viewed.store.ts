import {create} from 'zustand'
import {CartState} from 'app/_common/store/cart/cart.types'
import {persist} from 'zustand/middleware'
import {peek} from 'app/_common/utils/helpers/peek/peek.util'
import {ViewedStore} from 'app/_common/store/viewed/viewed.types'

export const useViewedStore = create<ViewedStore>()(
    persist(
        (set, get) => ({
            saved: [],
            items: [],
            setSaved: (saved) => set({saved}),
            setItems: (items) => set({items})
        }),
        {
            name: 'viewed',
            partialize: (state) => peek(state,  ['saved']),
        }
    )
)
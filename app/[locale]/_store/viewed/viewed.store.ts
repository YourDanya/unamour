import {create} from 'zustand'
import {CartState} from 'app/[locale]/_store/cart/cart.types'
import {persist} from 'zustand/middleware'
import {peek} from 'app/[locale]/_common/utils/helpers/peek/peek.util'
import {ViewedStore} from 'app/[locale]/_store/viewed/viewed.types'

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
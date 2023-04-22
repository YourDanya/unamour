import {create} from 'zustand'
import {ModalStore} from 'app/[locale]/_store/modal/modal.types'
import {getKeys} from 'app/[locale]/_common/utils/main/main.utils'
import {ModalState} from 'app/[locale]/_store/modal/modal.types'
import {PayloadAction} from '@reduxjs/toolkit'
import {CartState} from 'app/[locale]/_store/cart/cart.types'
import {persist} from 'zustand/middleware'
import {createJSONStorage} from 'zustand/middleware'
import {peek} from 'app/[locale]/_common/utils/main/main.utils'

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            setCartItems: (items) => set({items}),
            orderId: '',
            setOrderId: (orderId) => set({orderId}),
            userFormData: null,
            setUserFormData: (userFormData) => set({userFormData}),
            order: null,
            setOrder: (order) => set({order}),
            paymentData: null,
            addItem: (addItem) => set(({items}) => {
                const itemIndex = items.findIndex(item => {
                    return item.common._id === addItem.common._id
                })
                if (itemIndex === -1) {
                    items.push(addItem)
                } else {
                    items[itemIndex].quantity++
                }
                return {items}
            }),
            removeItem: (_id) => set(({items}) => {
                const itemIndex = items.findIndex(item => {
                    return item.common._id === _id
                })
                if (itemIndex !== -1) {
                    items.splice(itemIndex, 1)
                }
                return {items}
            }),
            increaseQuantity: (_id) => set(({items}) => {
                const itemIndex = items.findIndex(item => {
                    return item.common._id === _id
                })
                if (itemIndex !== -1) {
                    items[itemIndex].quantity++
                }
                return {items}
            }),
            decreaseQuantity: (_id) => set(({items}) => {
                const itemIndex = items.findIndex(item => {
                    return item.common._id === _id
                })
                if (itemIndex !== -1) {
                    items[itemIndex].quantity++
                }
                return {items}
            }),
            getItemsQuantity: () => {
                return get().items.reduce((quantity, item) => quantity + item.quantity, 0)
            },
            getTotalPrice: () => {
                return get().items.reduce((totalPrice, {quantity, common: {price}}) => {
                    return  + quantity * +price
                }, 0)
            }
        }),
        {
            name: 'cart',
            partialize: (state) => peek(state,  ['items', 'orderId', 'userFormData']),
        }
    )
)



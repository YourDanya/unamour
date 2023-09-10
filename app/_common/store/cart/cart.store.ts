import {ModalStore} from 'app/_common/store/modal/modal.types'
import getKeys from 'app/_common/utils/typescript/get-keys/get-keys.utils'
import {ModalState} from 'app/_common/store/modal/modal.types'
import {CartState} from 'app/_common/store/cart/cart.types'
import {peek} from 'app/_common/utils/helpers/peek/peek.util'
import {persist} from 'zustand/middleware'
import {create} from 'zustand'

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            setCartItems: (items) => set({items: items}),
            orderId: '',
            setOrderId: (orderId) => set({orderId}),
            userFormData: null,
            setUserFormData: (userFormData) => set({userFormData}),
            order: null,
            setOrder: (order) => set({order}),
            paymentData: null,
            setPaymentData: (paymentData) =>set({paymentData}),
            addItem: (addItem) => set(({items}) => {
                const itemIndex = items.findIndex(item => {
                    return item.shopItemId === addItem.shopItemId 
                        && item.color === addItem.color && item.size === addItem.size
                })
                if (itemIndex === -1) {
                    items.push(addItem)
                } else {
                    items[itemIndex].quantity++
                }
                return {items}
            }),
            removeItem: (removeItem) => set(({items}) => {
                const itemIndex = items.findIndex(item => {
                    return item.shopItemId === removeItem.shopItemId
                        && item.color === removeItem.color && item.size === removeItem.size
                })
                if (itemIndex !== -1) {
                    items.splice(itemIndex, 1)
                }
                return {items}
            }),
            increaseQuantity: (increaseItem) => set(({items}) => {
                const itemIndex = items.findIndex(item => {
                    return item.shopItemId === increaseItem.shopItemId
                        && item.color === increaseItem.color && item.size === increaseItem.size
                })
                if (itemIndex !== -1) {
                    items[itemIndex].quantity++
                }
                return {items: [...items]}
            }),
            decreaseQuantity: (decreaseItem) => set(({items}) => {
                const itemIndex = items.findIndex(item => {
                    return item.shopItemId === decreaseItem.shopItemId
                        && item.color === decreaseItem.color && item.size === decreaseItem.size
                })
                if (itemIndex !== -1) {
                    items[itemIndex].quantity--
                }
                if (items[itemIndex].quantity === 0) {
                    items.splice(itemIndex, 1)
                }
                return {items: [...items]}
            }),
            getItemsQuantity: () => {
                return get().items.reduce((quantity, item) => quantity + item.quantity, 0)
            },
            getTotalPrice: () => {
                return get().items.reduce((totalPrice, {quantity, price}) => {
                    return totalPrice + quantity * price
                }, 0)
            }
        }),
        {
            name: 'cart',
            partialize: (state) => peek(state,  ['orderId', 'userFormData']),
        }
    )
)



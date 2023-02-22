import {useSelector} from 'react-redux'
import {selectCartItems} from 'redux/cart/cart.selector'
import {selectTotalPrice} from 'redux/cart/cart.selector'
import {useLocale} from 'hooks/other/other.hooks'
import cartFormContent from 'components/cart/cart-form/cart-form.content'
import {useInput} from 'hooks/input/input.hooks'
import {useDispatch} from 'react-redux'
import {MouseAction} from 'types/types'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {createOrderAsync} from 'redux/checkout/checkout.thunk'
import {CreateOrderData} from 'redux/checkout/checkout.types'
import {selectCheckoutField} from 'redux/checkout/checkout.selector'
import {selectPaymentData} from 'redux/checkout/checkout.selector'
import {useEffect} from 'react'
import {useRef} from 'react'
import {PaymentData} from 'redux/checkout/checkout.types'
import {ReactNode} from 'react'

const useCart = () => {
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotalPrice)
    const createOrder = useParamSelector(selectCheckoutField, 'createOrder')
    const paymentData = useSelector(selectPaymentData)

    const [transl, content] = useLocale(cartFormContent)

    const {inputs, onChange, onValidate, errRef} = useInput(content.inputs)

    const dispatch = useDispatch()

    console.log('paymentData', paymentData)

    const onSubmit: MouseAction = (event) => {
        event.preventDefault()
        Object.keys(inputs.values).forEach((key) => onValidate(key))
        if (errRef.current.count !== 0) {
            return
        }
        const createOrderData: CreateOrderData = {
            email: inputs.values.email,
            name: `${inputs.values.surname} ${inputs.values.name}`,
            phone: inputs.values.number,
            destination: {
                RecipientAddressName: inputs.values.house,
                RecipientArea: inputs.values.street,
                RecipientAreaRegions: '',
                RecipientCityName: inputs.values.city,
                RecipientFlat: inputs.values.apartment,
                RecipientHouse: inputs.values.house,
                ServiceType: 'DoorsWarehouse',
                SettlementType: transl.inputs.settlementType.labels[
                    content.inputs.settlementType.values.findIndex(value => value === inputs.values.settlementType)
                    ]
            },
            products: cartItems.map(cartItem => ({
                id: cartItem.common.itemId,
                color: cartItem.common.color,
                size: cartItem.common.size,
                count: cartItem.quantity
            }))
        }
        dispatch(createOrderAsync(createOrderData))
    }

    const formRef = useRef<any>(null)

    useEffect(() => {
        if (!paymentData) {
            return
        }

        for (let prop in paymentData) {
            let key = prop as keyof PaymentData
            const item = paymentData[key]

            if ((typeof item == 'string') || (typeof item == 'number')) {
                console.log(item)

                const input = document.createElement('input')
                input.name = prop
                input.value = item as string
                input.type = 'hidden'
                formRef.current.append(input)
            }
        }


        for (let i in paymentData.products) {
            const item = paymentData.products[i]

            const nameInput = document.createElement('input')
            nameInput.name = 'productName[]'
            nameInput.value = item.uniqueNameIntheCart
            nameInput.type = 'hidden'
            formRef.current.append(nameInput)

            const countInput = document.createElement('input')
            countInput.name = 'productCount[]'
            countInput.value = item.count
            countInput.type = 'hidden'
            formRef.current.append(countInput)

            const priceInput = document.createElement('input')
            priceInput.name = 'productPrice[]'
            priceInput.value = item.price
            priceInput.type = 'hidden'
            formRef.current.append(priceInput)
        }

        formRef.current.submit()

    }, [paymentData])

    return {inputs, onChange, onValidate, transl, onSubmit, content, cartItems, total, createOrder, formRef}
}

export default useCart
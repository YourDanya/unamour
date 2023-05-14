import {MouseAction} from 'app/[locale]/_common/types/types'
import {useRef} from 'react'
import cartContent from 'app/[locale]/cart/_components/cart.content'
import {useEffect} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useRouter} from 'next/navigation'
import {useCartStore} from 'app/[locale]/_store/cart/cart.store'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {PaymentData} from 'app/[locale]/_store/cart/cart.types'
import {CreateOrderData} from 'app/[locale]/_store/cart/cart.types'

const useCart = () => {
    const cartItems = useCartStore(state => state.items)
    const total = useCartStore(state => state.getTotalPrice())
    const setCartItems = useCartStore(state => state.setCartItems)
    const setPaymentData = useCartStore(state => state.setPaymentData)

    const createOnlineOrder = useApiCall('checkout/create-online-payment-order', {
        method: 'POST',
        onSuccess: (paymentData: PaymentData) => {
            setPaymentData(paymentData)
        }
    })
    const createAfterOrder = useApiCall('checkout/create-after-payment-order', {
        method: 'POST',
        onSuccess: (paymentData: PaymentData) => {
            setPaymentData(paymentData)
            console.log('paymentData', paymentData)
        }
    })

    const paymentData = useCartStore(state => state.paymentData)
    const userFormData = useCartStore(state => state.userFormData)

    const [transl, content] = useLocale(cartContent)

    const {inputs, onChange, onValidate, errRef, setOuterValues} = useInput(content.inputs)

    const onSubmit: MouseAction = (event) => {
        event.preventDefault()
        Object.keys(inputs.values).forEach((key) => onValidate(key))
        const settlementIndex = content.inputs.settlementType.values.findIndex(value => value === inputs.values.settlementType)
        let destination
        if (inputs.values.serviceType === 'DoorsDoors') {
            for (let prop in errRef.current.errors) {
                const key = prop as keyof typeof errRef.current.errors
                if(errRef.current.errors[key] && key!== 'office') {
                    return
                }
            }
           destination = {
               RecipientCityName: inputs.values.city,
               SettlementType: transl.inputs.settlementType.labels[settlementIndex],
               RecipientArea: inputs.values.region,
               RecipientAreaRegions: "",
               RecipientAddressName: inputs.values.street,
               RecipientHouse: inputs.values.house,
               RecipientFlat: inputs.values.apartment,
               ServiceType: "DoorsDoors"
           }
        } else {
            for (let prop in errRef.current.errors) {
                const key = prop as keyof typeof errRef.current.errors
                if(errRef.current.errors[key] && key!== 'street' && key!== 'apartment' &&  key!== 'house') {
                    console.log('returning', key)
                    return
                }
            }
            destination = {
                RecipientCityName: inputs.values.city,
                SettlementType: transl.inputs.settlementType.labels[settlementIndex],
                RecipientArea: inputs.values.region,
                RecipientAreaRegions: '',
                RecipientAddressName: inputs.values.office,
                RecipientHouse: '',
                RecipientFlat: '',
                ServiceType: "DoorsWarehouse"
            }
        }
        const createOrderData: CreateOrderData = {
            email: inputs.values.email,
            name: `${inputs.values.surname} ${inputs.values.name}`,
            phone: inputs.values.number,
            deliveryService: 'novaposhta',
            destination,
            products: cartItems.map(cartItem => ({
                id: cartItem.common.itemId,
                color: cartItem.common.color,
                size: cartItem.common.size,
                count: cartItem.quantity
            }))
        }
        if (inputs.values.paymentType === 'after') {
            createAfterOrder.start(createOrderData)
        } else {
            console.log('create online order payment')
            createOnlineOrder.start(createOrderData)
        }
    }

    useEffect(() => {
        if (userFormData) {
            setOuterValues({...userFormData})
        }
    }, [])

    const formRef = useRef<any>(null)

    const router = useRouter()

    useEffect(() => {
        if (!paymentData) {
            return
        }

        console.log('paymentData', paymentData)

        if (paymentData.orderId) {
            router.push(paymentData.returnUrl)
            setCartItems([])
            setPaymentData(null)
            return
        }

        for (let prop in paymentData) {
            let key = prop as keyof PaymentData
            const item = paymentData[key]

            if ((typeof item == 'string') || (typeof item == 'number')) {
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

    const loading = createOnlineOrder.loading || createAfterOrder.loading

    return {
        inputs, onChange, onValidate, transl, onSubmit, content, cartItems, total, loading, formRef
    }
}

export default useCart
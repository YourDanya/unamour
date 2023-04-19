import {useSelector} from 'react-redux'
import {selectTotalPrice} from 'app/[locale]/_redux/cart/cart.selector'
import {PaymentData} from 'app/[locale]/_redux/checkout/checkout.types'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {setCartItems} from 'app/[locale]/_redux/cart/cart.slice'
import {useRef} from 'react'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {selectCheckoutField} from 'app/[locale]/_redux/checkout/checkout.selector'
import {setPaymentData} from 'app/[locale]/_redux/checkout/checkout.slice'
import cartContent from 'app/[locale]/cart/_components/cart.content'
import {selectUserFormData} from 'app/[locale]/_redux/cart/cart.selector'
import {selectCartItems} from 'app/[locale]/_redux/cart/cart.selector'
import {createOrderAsync} from 'app/[locale]/_redux/checkout/checkout.thunk'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {selectPaymentData} from 'app/[locale]/_redux/checkout/checkout.selector'
import {CreateOrderData} from 'app/[locale]/_redux/checkout/checkout.types'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useRouter} from 'next/navigation'

const useCart = () => {
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotalPrice)
    const createOrder = useParamSelector(selectCheckoutField, 'createOrder')
    const paymentData = useSelector(selectPaymentData)
    const userFormData = useSelector(selectUserFormData)

    const [transl, content] = useLocale(cartContent)

    const {inputs, onChange, onValidate, errRef, setOuterValues} = useInput(content.inputs)

    const dispatch = useDispatch()


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
        dispatch(createOrderAsync(createOrderData, inputs.values.paymentType))

        // if (inputs.values.save) {
        //     dispatch(setUserFormData({...inputs.values}))
        // } else {
        //     dispatch(setUserFormData(null))
        // }
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

        if (paymentData.orderId) {
            router.push(paymentData.returnUrl)
            dispatch(setCartItems([]))
            dispatch(setPaymentData(null))
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


    return {
        inputs, onChange, onValidate, transl, onSubmit, content, cartItems, total, createOrder, formRef
    }
}

export default useCart
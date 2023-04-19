import {DiscountProps} from 'app/[locale]/cart/_components/discount/discount.types'
import discountContent from 'app/[locale]/cart/_components/discount/discount.content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useState} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'

const useDiscount = (props: DiscountProps) => {
    const [transl, content] = useLocale(discountContent)

    const [active, setActive] = useState({certificate: false, promo: false})

    const onActive: MouseAction = (event) => {
        const name = event.currentTarget.getAttribute('name') as string
        setActive({...active, [name]: true})
    }

    const [found, setFound] = useState({certificate: false, promo: false})

    const onFound: MouseAction = (event) => {
        const name = event.currentTarget.getAttribute('name') as string
        setFound({...found, [name]: false})
    }

    const {inputs, onChange, onValidate} = useInput(content.inputs)

    return {transl, active, onActive, found, onFound, inputs, onChange, onValidate}
}

export default useDiscount

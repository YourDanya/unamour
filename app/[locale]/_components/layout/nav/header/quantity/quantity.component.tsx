import {FC} from 'react'
import {QuantityProps} from 'app/[locale]/_components/layout/nav/header/quantity/quantity.types'
import useQuantity from 'app/[locale]/_components/layout/nav/header/quantity/quantity.hook'

const Quantity: FC<QuantityProps> = (props) => {
    const {home} = props
    const {quantity} = useQuantity()

    return (
        <div className={`nav__cart-quantity ${home? 'nav__cart-quantity--home' : ''}`}>
            {quantity !==0 && quantity}
        </div>
    )
}

export default Quantity
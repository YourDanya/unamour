import {FC} from 'react'
import useOrder from 'components/cart/order/order.hook'
import Button from 'components/common/button/button.component'
import Link from 'next/link'
import presentImg from '/public/icons/present.svg'
import {OrderProps} from 'components/cart/order/order.types'

const Order: FC<OrderProps> = (props) => {
    const {total, className} = props
    const {transl} = useOrder()

    return (
        <div className={`order ${className ?? ''}`}>
            <div className='order__title'>{transl.title}</div>
            <div className='order__properties'>
                <div className='order__property'>
                    <div className='order__label'>{transl.cost}</div>
                    <div className="order__value">{total} {transl.currency}</div>
                </div>
                <div className='order__property'>
                    <div className='order__label'>{transl.discount}</div>
                    <div className="order__value">0 {transl.currency}</div>
                </div>
                <div className='order__property'>
                    <div className='order__label'>{transl.delivery}</div>
                    <div className="order__value">0 {transl.currency}</div>
                </div>
                <div className='order__property'>
                    <div className='order__label'>{transl.total}</div>
                    <div className="order__value">{total} {transl.currency}</div>
                </div>
            </div>
            <Button className={'order__button'} onClick={() => {}}>
                {transl.makeOrder}
            </Button>
            <Button className={'order__button order__button--present'} onClick={() => {}}>
                <>
                    {transl.hint}
                    <img className='order__present-img' src={presentImg.src} alt={'present'}/>
                </>
            </Button>
            <div className='cart__policy'>
                {transl.policy}
                <Link href={'/'}>
                    <a className='order__policy-link'>{transl.policyLink}</a>
                </Link>
            </div>
        </div>
    )
}

export default Order
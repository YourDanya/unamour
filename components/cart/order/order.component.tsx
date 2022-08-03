import React from "react"
import Button from "../../common/button/button.component"
import presentImg from '/public/icons/present.svg'
import Link from "next/link"

type orderProps = {
    total: number,
    className: string
}

const Order: React.FC<orderProps> = ({total, className}) => {
    
    return (
        <div className={`order ${className ?? ''}`}>
            <div className='order__title'>ІНФОРМАЦІЯ ПРО ЗАМОВЛЕННЯ</div>
            <div className='order__properties'>
                <div className='order__property'>
                    <div className='order__label'>Віртість товарів</div>
                    <div className="order__value">{total} ₴</div>
                </div>
                <div className='order__property'>
                    <div className='order__label'>Знижка</div>
                    <div className="order__value">0 ₴</div>
                </div>
                <div className='order__property'>
                    <div className='order__label'>Доставка</div>
                    <div className="order__value">0 ₴</div>
                </div>
                <div className='order__property'>
                    <div className='order__label'>разом до оплати</div>
                    <div className="order__value">{total} ₴</div>
                </div>
            </div>
            <Button className={'order__button'}>
                ЗРОБИТИ ЗАМОВЛЕННЯ
            </Button>
            <Button className={'button--white order__button order__button--present'}>
                <>
                    НАТЯКНУТИ
                    <img className='order__present-img' src={presentImg.src} alt={'present'}/>
                </>
            </Button>
            <div className='cart__policy'>
                {'Завершуючи оформлення замовлення, я даю згоду\n на обробку та передачу моїх '}
                <Link href={'/'}>
                    <a className='order__policy-link'>персональных данных</a>
                </Link>
            </div>
        </div>
    )
}

export default Order
import React from "react"
import Input from "../../common/input/input.component"
import useDiscount from "./discount.hook";

export type DiscountProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    values: { certificate: string, promo: string }
}

const Discount: React.FC<DiscountProps> = (props) => {

    const {values, handleChange, active, toggleActive, found, setFound} = useDiscount(props)

    return (
        <div className={'discount'}>
            <div className='discount__certificate'>
                {active.certificate ? (
                    <>
                        <Input
                            placeholder={'Сертифікат'}
                            name={'certificate'}
                            value={values.certificate}
                            className={'cart__input discount__input'}
                            handleChange={handleChange}
                            error={found.certificate ? '' : 'Не знайдено'}
                        >
                            <button className='discount__apply' name='certificate' onClick={setFound}>
                                ЗАСТОСУВАТИ
                            </button>
                        </Input>
                    </>
                ) : (
                    <button className="discount__button" name={'certificate'} onClick={toggleActive}>
                        ВИКОРИСТАТИ СЕРТИФІКАТ
                    </button>
                )}
            </div>
            <div className='discount__certificate'>
                {active.promo ? (
                    <>
                        <Input
                            placeholder={'Промокод'}
                            name={'promo'}
                            value={values.promo}
                            className={'cart__input discount__input'}
                            handleChange={handleChange}
                            error={found.promo ? '' : 'Не знайдено'}
                        >
                            <button className='discount__apply' name='promo' onClick={setFound}>
                                ЗАСТОСУВАТИ
                            </button>
                        </Input>
                    </>
                ) : (
                    <button className="discount__button" name={'promo'} onClick={toggleActive}>
                        ВИКОРИСТАТИ ПРОМОКОД
                    </button>
                )}
            </div>
        </div>
    )
}

export default Discount
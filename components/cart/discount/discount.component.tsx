import React from 'react'
import Button from 'components/common/button/button.component'
import useDiscount from 'components/cart/discount/discount.hook'
import Input from 'components/common/input/input.component'

export type DiscountProps = {}

const Discount: React.FC<DiscountProps> = (props) => {

    const {active, toggleActive, found, setFound, inputs, onChange, onValidate, transl} = useDiscount(props)

    return (
        <div className={'discount'}>
            <div className='discount__certificate'>
                {active.certificate ? (
                    <>
                        <Input
                            className={'cart__input discount__input'}
                            name={'cert'}
                            placeholder={transl.inputs.cert}
                            value={inputs.values.cert}
                            onChange={onChange}
                            error={inputs.errors.cert}
                            onValidate={onValidate}
                        >
                            <Button className='discount__apply' name='certificate' onClick={setFound}>
                                {transl.apply}
                            </Button>
                        </Input>
                    </>
                ) : (
                    <button className="discount__button" name={'certificate'} onClick={toggleActive}>
                        {transl.applyCert}
                    </button>
                )}
            </div>
            <div className='discount__certificate'>
                {active.promo ? (
                    <>
                        <Input
                            className={'cart__input discount__input'}
                            name={'promo'}
                            placeholder={transl.inputs.promo}
                            value={inputs.values.promo}
                            onChange={onChange}
                            error={inputs.errors.promo}
                        >
                            <Button className='discount__apply' name='promo' onClick={setFound}>
                                {transl.apply}
                            </Button>
                        </Input>
                    </>
                ) : (
                    <button className="discount__button" name={'promo'} onClick={toggleActive}>
                        {transl.applyPromo}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Discount
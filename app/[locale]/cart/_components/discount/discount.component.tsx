import {DiscountProps} from 'app/[locale]/cart/_components/discount/discount.types'
import Button from 'app/_common/components/button/button.component'
import {FC} from 'react'
import useDiscount from 'app/[locale]/cart/_components/discount/discount.hook'
import Input from 'app/_common/components/input/input.component'

const Discount: FC<DiscountProps> = (props) => {
    const {active, onActive, found, onFound, inputs, onChange, onValidate, transl} = useDiscount(props)

    return (
        <div className={'discount'}>
            <div className='discount__certificate'>
                {active.certificate ? (
                    <>
                        <Input
                            className={'_components-form__input discount__input'}
                            name={'cert'}
                            placeholder={transl.inputs.cert}
                            value={inputs.values.cert}
                            onChange={onChange}
                            error={inputs.errors.cert}
                            onValidate={onValidate}
                        />
                        <Button className='discount__apply' name='certificate' onClick={onFound}>
                            {transl.apply}
                        </Button>
                    </>
                ) : (
                    <button className="discount__button" name={'certificate'} onClick={onActive}>
                        {transl.applyCert}
                    </button>
                )}
            </div>
            <div className='discount__certificate'>
                {active.promo ? (
                    <>
                        <Input
                            className={'_components-form__input discount__input'}
                            name={'promo'}
                            placeholder={transl.inputs.promo}
                            value={inputs.values.promo}
                            onChange={onChange}
                            error={inputs.errors.promo}
                        />
                        <Button className='discount__apply' name='promo' onClick={onFound}>
                            {transl.apply}
                        </Button>
                    </>
                ) : (
                    <button className="discount__button" name={'promo'} onClick={onActive}>
                        {transl.applyPromo}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Discount
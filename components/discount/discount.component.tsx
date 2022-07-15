import React from "react";
import CustomInput from "../common/custom-input/custom-input.component";
import {useSetFalseMany, useToggleMany} from "../../hooks/hooks";

type discountProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    values: { certificate: string, promo: string }
}

const Discount: React.FC<discountProps> = ({handleChange, values}) => {
    const [active, toggleActive] = useToggleMany(['certificate', 'promo'] as const, 'name')
    const [found, setFound] = useSetFalseMany(['certificate', 'promo'] as const, 'name')

    return (
        <div className={'discount'}>
            <div className='discount__certificate'>
                {active.certificate ? (
                    <>
                        <CustomInput
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
                        </CustomInput>
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
                        <CustomInput
                            placeholder={'Промокод'}
                            name={'promo'}
                            value={values.promo}
                            className={'cart__input discount__input'}
                            handleChange={handleChange}
                            error={found.certificate ? '' : 'Не знайдено'}
                        >
                            <button className='discount__apply' name='promo' onClick={setFound}>
                                ЗАСТОСУВАТИ
                            </button>
                        </CustomInput>
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
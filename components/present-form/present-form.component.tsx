import React from "react"
import Input from "../common/input/input.component"
import Button from "../common/button/button.component"
import RadioButtons from "../common/radio-buttons/radio-buttons.component"
import Checkbox from "../common/checkbox/checkbox.component"
import {InputTypes, LocaleType} from "../../types/types"
import {presentContent} from "../present/present.content"
import {mapDelivery} from "../../utils/component.utils";

export type presentFormProps = {
    localeInputs: typeof presentContent.translation[LocaleType]['inputs'],
    price: number,
    inputs: typeof presentContent['inputs'],
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const PresentForm: React.FC<presentFormProps> = (props) => {
    const {price, handleChange, inputs, localeInputs} = {...props}

    return (
        <div className={'present__data'}>
            <div className={'present__question'}>
                КОМУ ВИ ХОЧЕТЕ ЗРОБИТИ ПОДАРУНОК?
            </div>
            <Input
                className='input--present present__input'
                placeholder={localeInputs.recName.placeholder}
                name={'recName'}
                value={inputs.recName.value as string}
                handleChange={handleChange}
                error={inputs.recName.error}
            />
            <Input
                className='input--present present__input'
                placeholder={localeInputs.recSurname.placeholder}
                name={'recSurname'}
                value={inputs.recSurname.value as string}
                handleChange={handleChange}
                error={inputs.recSurname.error}
            />
            <Input
                className='input--present'
                placeholder={localeInputs.recEmail.placeholder}
                name={'recEmail'}
                value={inputs.recEmail.value as string}
                handleChange={handleChange}
                error={inputs.recEmail.error}
            />
            <Input
                className='input--present present__input'
                placeholder={localeInputs.recPhone.placeholder}
                name={'recPhone'}
                value={inputs.recPhone.value as string}
                handleChange={handleChange}
                error={inputs.recPhone.error}
            />
            <div className={'present__question'}>ВІД КОГО</div>
            <Input
                className='input--present present__input'
                placeholder={localeInputs.recPhone.placeholder}
                name={'sendName'}
                value={inputs.sendName.value as string}
                handleChange={handleChange}
                error={inputs.sendName.error}
            />
            <Input
                className='input--present present__input'
                placeholder={localeInputs.sendEmail.placeholder}
                name={'sendEmail'}
                value={inputs.sendEmail.value as string}
                handleChange={handleChange}
                error={inputs.sendEmail.error}
            />
            <div className={'present__question'}>КУДИ ВІДПРАВИТИ?</div>
            <Input
                className='input--present present__input'
                placeholder={localeInputs.country.placeholder}
                name={'country'}
                value={inputs.country.value as string}
                handleChange={handleChange}
                error={inputs.country.error}
            />
            <Input
                className='input--present present__input'
                placeholder={localeInputs.city.placeholder}
                name={'city'}
                value={inputs.city.value as string}
                handleChange={handleChange}
                error={inputs.city.error}
            />
            <Input
                className='input--present present__input'
                placeholder={localeInputs.index.placeholder}
                name={'index'}
                value={inputs.index.value as string}
                handleChange={handleChange}
                error={inputs.index.error}
            />
            <div className={'present__index'}>Введіть 00000, якщо у вашої країни немає індексу</div>
            <Input
                className='input--present present__input'
                placeholder={localeInputs.street.placeholder}
                name={'street'}
                value={inputs.street.value as string}
                handleChange={handleChange}
                error={inputs.street.error}
            />
            <Input
                className='input--present present__input'
                placeholder={localeInputs.house.placeholder}
                name={'house'}
                value={inputs.house.value as string}
                handleChange={handleChange}
                error={inputs.house.error}
            />
            <Input
                className='input--present present__input'
                placeholder={localeInputs.apartment.placeholder}
                name={'apartment'}
                value={inputs.apartment.value as string}
                handleChange={handleChange}
                error={inputs.apartment.error}
            />
            <div className={'present__question'}>ОБЕРІТЬ ДОСТАВКУ</div>
            <RadioButtons
                className={'present__delivery'}
                name={'delivery'}
                inputs={mapDelivery(inputs.delivery.value, localeInputs.delivery.labels)}
                handleChange={handleChange}
                active={inputs.delivery.value[0] as string}
            />
            <div className='present__total'>
                <div className="present__total-label">Вартість: {price} ₴</div>
                <div className="present__total-label">Доставка: 0 ₴</div>
            </div>
            <Checkbox
                className={'checkbox--present'}
                label={localeInputs.anonymously.placeholder}
                name={'anonymously'}
                value={inputs.anonymously.value as boolean}
                handleChange={handleChange}
            />
            <Checkbox
                className={'checkbox--present'}
                label={localeInputs.surprise.placeholder}
                name={'surprise'}
                value={inputs.surprise.value as boolean}
                handleChange={handleChange}
            />
            <Button className={'button--present'}>
                {`СПЛАТИТИ ${price} ₴`}
            </Button>
        </div>
    )
}

export default PresentForm
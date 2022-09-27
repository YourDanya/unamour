import React from 'react'
import usePresentForm from 'components/shop-item/present/present-form/present-form.hook'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import Checkbox from 'components/common/checkbox/checkbox.component'

export type PresentFormProps = {
    price: number,
}

const PresentForm: React.FC<PresentFormProps> = (props) => {
    const {price} = props

    const {inputs, handleValidate, handleChange, transl, handleSubmit} = usePresentForm()

    return (
        <div className={'present__data'}>
            <div className={'present__question'}>
                {transl.toWhom}
            </div>
            <Input
                className='present__input'
                name={'recName'}
                placeholder={transl.inputs.recName}
                value={inputs.values.recName}
                handleChange={handleChange}
                error={inputs.errors.recName}
                handleValidate={handleValidate}
            />
            <Input
                className='present__input'
                name={'recSurname'}
                placeholder={transl.inputs.recSurname}
                value={inputs.values.recSurname}
                handleChange={handleChange}
                error={inputs.errors.recSurname}
                handleValidate={handleValidate}
            />
            <Input
                className='present__input'
                name={'recEmail'}
                placeholder={transl.inputs.recEmail}
                value={inputs.values.recEmail}
                handleChange={handleChange}
                error={inputs.errors.recEmail}
                handleValidate={handleValidate}
            />
            <Input
                className='present__input'
                name={'recPhone'}
                placeholder={transl.inputs.recPhone}
                value={inputs.values.recPhone}
                handleChange={handleChange}
                error={inputs.errors.recPhone}
                handleValidate={handleValidate}
            />
            <div className={'present__question'}>
                {transl.fromWhom}
            </div>
            <Input
                className='present__input'
                name={'sendName'}
                placeholder={transl.inputs.sendName}
                value={inputs.values.sendName}
                handleChange={handleChange}
                error={inputs.errors.sendName}
                handleValidate={handleValidate}
            />
            <Input
                className='present__input'
                name={'sendEmail'}
                placeholder={transl.inputs.sendEmail}
                value={inputs.values.sendName}
                handleChange={handleChange}
                error={inputs.errors.sendEmail}
                handleValidate={handleValidate}
            />
            <div className={'present__question'}>
                {transl.where}
            </div>
            <Input
                className='present__input'
                name={'country'}
                placeholder={transl.inputs.country}
                value={inputs.values.country}
                handleChange={handleChange}
                error={inputs.errors.country}
                handleValidate={handleValidate}
            />
            <Input
                className='present__input'
                name={'city'}
                placeholder={transl.inputs.city}
                value={inputs.values.city}
                handleChange={handleChange}
                error={inputs.errors.city}
                handleValidate={handleValidate}
            />
            <Input
                className='present__input'
                name={'index'}
                placeholder={transl.inputs.index}
                value={inputs.values.index}
                handleChange={handleChange}
                error={inputs.errors.index}
                handleValidate={handleValidate}
            />
            <div className={'present__index'}>
                {transl.index}
            </div>
            <Input
                className='present__input'
                name={'street'}
                placeholder={transl.inputs.street}
                value={inputs.values.street}
                handleChange={handleChange}
                error={inputs.errors.street}
                handleValidate={handleValidate}
            />
            <Input
                className='input--present present__input'
                name={'house'}
                placeholder={transl.inputs.house}
                value={inputs.values.house}
                handleChange={handleChange}
                error={inputs.errors.house}
                handleValidate={handleValidate}
            />
            <Input
                className='input--present present__input'
                name={'apartment'}
                placeholder={transl.inputs.apartment}
                value={inputs.values.apartment}
                handleChange={handleChange}
                error={inputs.errors.apartment}
                handleValidate={handleValidate}
            />
            <div className={'present__question'}>{transl.delivery}</div>
            {/*<RadioButtons*/}
            {/*    className={'present__delivery'}*/}
            {/*    name={'delivery'}*/}
            {/*    inputs={mapDelivery(inputs.delivery.value, localeInputs.delivery.labels)}*/}
            {/*    handleChange={handleChange}*/}
            {/*    active={inputs.delivery.value[0] as string}*/}
            {/*/>*/}
            <div className='present__total'>
                <div className="present__total-label">{transl.totalPrice}: {price} ₴</div>
                <div className="present__total-label">{transl.delivery}: 0 ₴</div>
            </div>
            <Checkbox
                className={'checkbox--present'}
                name={'anonymously'}
                label={transl.inputs.surprise}
                value={inputs.values.anonymously}
                handleChange={handleChange}
            />
            <Checkbox
                className={'checkbox--present'}
                name={'surprise'}
                label={transl.inputs.surprise}
                value={inputs.values.surprise}
                handleChange={handleChange}
            />
            <Button className={'button--present'} onClick={handleSubmit}>
                {`${transl.pay} ${price} ₴`}
            </Button>
        </div>
    )
}

export default PresentForm
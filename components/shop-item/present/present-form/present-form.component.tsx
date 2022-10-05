import React from 'react'
import usePresentForm from 'components/shop-item/present/present-form/present-form.hook'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import Checkbox from 'components/common/checkbox/checkbox.component'
import RadioButtons from 'components/common/radio-buttons/radio-buttons.component'

export type PresentFormProps = {
    price: number,
}

const PresentForm: React.FC<PresentFormProps> = (props) => {

    const {price} = props
    const {inputs, handleValidate, handleChange, transl, handleSubmit, content, labels} = usePresentForm()

    return (
        <div className={'present__form'}>
            <div className={'present__label'}>
                {transl.toWhom}
            </div>
            <Input
                className="present__input"
                name={'recName'}
                placeholder={transl.inputs.recName}
                value={inputs.values.recName}
                handleChange={handleChange}
                error={inputs.errors.recName}
                handleValidate={handleValidate}
            />
            <Input
                className="present__input"
                name={'recSurname'}
                placeholder={transl.inputs.recSurname}
                value={inputs.values.recSurname}
                handleChange={handleChange}
                error={inputs.errors.recSurname}
                handleValidate={handleValidate}
            />
            <Input
                className="present__input"
                name={'recEmail'}
                placeholder={transl.inputs.recEmail}
                value={inputs.values.recEmail}
                handleChange={handleChange}
                error={inputs.errors.recEmail}
                handleValidate={handleValidate}
            />
            <Input
                className="present__input present__recipient-phone"
                name={'recPhone'}
                placeholder={transl.inputs.recPhone}
                value={inputs.values.recPhone}
                handleChange={handleChange}
                error={inputs.errors.recPhone}
                handleValidate={handleValidate}
            />
            <div className={'present__label'}>
                {transl.fromWhom}
            </div>
            <Input
                className="present__input"
                name={'sendName'}
                placeholder={transl.inputs.sendName}
                value={inputs.values.sendName}
                handleChange={handleChange}
                error={inputs.errors.sendName}
                handleValidate={handleValidate}
            />
            <Input
                className="present__input present__sender-email"
                name={'sendEmail'}
                placeholder={transl.inputs.sendEmail}
                value={inputs.values.sendEmail}
                handleChange={handleChange}
                error={inputs.errors.sendEmail}
                handleValidate={handleValidate}
            />
            <div className={'present__label'}>
                {transl.where}
            </div>
            <Input
                className="present__input"
                name={'country'}
                placeholder={transl.inputs.country}
                value={inputs.values.country}
                handleChange={handleChange}
                error={inputs.errors.country}
                handleValidate={handleValidate}
            />
            <Input
                className="present__input"
                name={'city'}
                placeholder={transl.inputs.city}
                value={inputs.values.city}
                handleChange={handleChange}
                error={inputs.errors.city}
                handleValidate={handleValidate}
            />
            <Input
                className="present__input present__index"
                name={'index'}
                placeholder={transl.inputs.index}
                value={inputs.values.index}
                handleChange={handleChange}
                error={inputs.errors.index}
                handleValidate={handleValidate}
            />
            <div className={'present__index-label'}>
                {transl.index}
            </div>
            <Input
                className="present__input"
                name={'street'}
                placeholder={transl.inputs.street}
                value={inputs.values.street}
                handleChange={handleChange}
                error={inputs.errors.street}
                handleValidate={handleValidate}
            />
            <Input
                className="present__input"
                name={'house'}
                placeholder={transl.inputs.house}
                value={inputs.values.house}
                handleChange={handleChange}
                error={inputs.errors.house}
                handleValidate={handleValidate}
            />
            <Input
                className="present__input present__apartment"
                name={'apartment'}
                placeholder={transl.inputs.apartment}
                value={inputs.values.apartment}
                handleChange={handleChange}
                error={inputs.errors.apartment}
                handleValidate={handleValidate}
            />
            <div className={'present__label'}>{transl.delivery}</div>
            <RadioButtons
                className={'present__delivery'}
                name={'delivery'}
                labels={labels}
                values={content.inputs.delivery.values}
                handleChange={handleChange}
                active={inputs.values.delivery}
            />
            <div className="present__total">
                <div className="present__total-label">
                    {transl.totalPrice} {price} {transl.currency}
                </div>
                <div className="present__total-label">
                    {transl.delivery} 0 {transl.currency}
                </div>
            </div>
            <Checkbox
                className={'present__checkbox'}
                name={'anonymously'}
                label={transl.inputs.anonymously}
                value={inputs.values.anonymously}
                handleChange={handleChange}
            />
            <Checkbox
                className={'present__checkbox present__surprise'}
                name={'surprise'}
                label={transl.inputs.surprise}
                value={inputs.values.surprise}
                handleChange={handleChange}
            />
            <Button className={'present__button'} onClick={handleSubmit}>
                {transl.pay} {price} {transl.currency}
            </Button>
        </div>
    )
}

export default PresentForm
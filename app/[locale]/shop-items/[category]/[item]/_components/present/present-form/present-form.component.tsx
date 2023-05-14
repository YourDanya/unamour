import {FC} from 'react'
import {PresentFormProps} from 'app/[locale]/shop-items/[category]/[item]/_components/present/present-form/present-form.types'
import Button from 'app/[locale]/_common/components/button/button.component'
import Checkbox from 'app/[locale]/_common/components/checkbox/checkbox.component'
import RadioButtons from 'app/[locale]/_common/components/radio-buttons/radio-buttons.component'
import usePresentForm from 'app/[locale]/shop-items/[category]/[item]/_components/present/present-form/present-form.hook'
import Input from 'app/[locale]/_common/components/input/input.component'

const PresentForm: FC<PresentFormProps> = (props) => {
    const {price} = props
    const {inputs, onValidate, onChange, transl, handleSubmit, content, labels} = usePresentForm()

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
                onChange={onChange}
                error={inputs.errors.recName}
                onValidate={onValidate}
            />
            <Input
                className="present__input"
                name={'recSurname'}
                placeholder={transl.inputs.recSurname}
                value={inputs.values.recSurname}
                onChange={onChange}
                error={inputs.errors.recSurname}
                onValidate={onValidate}
            />
            <Input
                className="present__input"
                name={'recEmail'}
                placeholder={transl.inputs.recEmail}
                value={inputs.values.recEmail}
                onChange={onChange}
                error={inputs.errors.recEmail}
                onValidate={onValidate}
            />
            <Input
                className="present__input present__recipient-phone"
                name={'recPhone'}
                placeholder={transl.inputs.recPhone}
                value={inputs.values.recPhone}
                onChange={onChange}
                error={inputs.errors.recPhone}
                onValidate={onValidate}
            />
            <div className={'present__label'}>
                {transl.fromWhom}
            </div>
            <Input
                className="present__input"
                name={'sendName'}
                placeholder={transl.inputs.sendName}
                value={inputs.values.sendName}
                onChange={onChange}
                error={inputs.errors.sendName}
                onValidate={onValidate}
            />
            <Input
                className="present__input present__sender-email"
                name={'sendEmail'}
                placeholder={transl.inputs.sendEmail}
                value={inputs.values.sendEmail}
                onChange={onChange}
                error={inputs.errors.sendEmail}
                onValidate={onValidate}
            />
            <div className={'present__label'}>
                {transl.where}
            </div>
            <Input
                className="present__input"
                name={'country'}
                placeholder={transl.inputs.country}
                value={inputs.values.country}
                onChange={onChange}
                error={inputs.errors.country}
                onValidate={onValidate}
            />
            <Input
                className="present__input"
                name={'city'}
                placeholder={transl.inputs.city}
                value={inputs.values.city}
                onChange={onChange}
                error={inputs.errors.city}
                onValidate={onValidate}
            />
            <Input
                className="present__input present__index"
                name={'index'}
                placeholder={transl.inputs.index}
                value={inputs.values.index}
                onChange={onChange}
                error={inputs.errors.index}
                onValidate={onValidate}
            />
            <div className={'present__index-label'}>
                {transl.index}
            </div>
            <Input
                className="present__input"
                name={'street'}
                placeholder={transl.inputs.street}
                value={inputs.values.street}
                onChange={onChange}
                error={inputs.errors.street}
                onValidate={onValidate}
            />
            <Input
                className="present__input"
                name={'house'}
                placeholder={transl.inputs.house}
                value={inputs.values.house}
                onChange={onChange}
                error={inputs.errors.house}
                onValidate={onValidate}
            />
            <Input
                className="present__input present__apartment"
                name={'apartment'}
                placeholder={transl.inputs.apartment}
                value={inputs.values.apartment}
                onChange={onChange}
                error={inputs.errors.apartment}
                onValidate={onValidate}
            />
            <div className={'present__label'}>{transl.delivery}</div>
            <RadioButtons
                className={'present__delivery'}
                name={'delivery'}
                labels={labels}
                values={content.inputs.delivery.values}
                onChange={onChange}
                active={inputs.values.delivery}
            >
                {transl.inputs.delivery.map(({price, duration, title}) => (
                    <div className="delivery-type" key={title}>
                        <div className="delivery-type__price">{price}</div>
                        <div className="delivery-type__duration">{duration}</div>
                    </div>
                ))}
            </RadioButtons>
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
                onChange={onChange}
            />
            <Checkbox
                className={'present__checkbox present__surprise'}
                name={'surprise'}
                label={transl.inputs.surprise}
                value={inputs.values.surprise}
                onChange={onChange}
            />
            <Button className={'present__button'} onClick={handleSubmit}>
                {transl.pay} {price} {transl.currency}
            </Button>
        </div>
    )
}

export default PresentForm
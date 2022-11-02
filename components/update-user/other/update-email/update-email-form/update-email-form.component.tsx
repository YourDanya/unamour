import {FC} from 'react'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import useUpdateEmailForm from 'components/update-user/other/update-email/update-email-form/update-email-form.hook'
import {UpdateEmailFormProps} from 'components/update-user/other/update-email/update-email-form/update-email.form.types'
import FormMessage from 'components/common/form-message/form-message.component'
import React from 'react'

const UpdateEmailForm: FC<UpdateEmailFormProps> = (props) => {

    const {updateEmail} = props
    const {transl, handleChange, handleValidate, inputs, handleSubmit} = useUpdateEmailForm()

    return (
        <form className={'update-user__form update-user__modal-form'}>
            <div className={'update-user__title'}>{transl.title}</div>
            <Input
                className={'update-user__input'}
                name={'password'}
                handleChange={handleChange}
                placeholder={transl.inputs.password}
                value={inputs.values.password}
                error={inputs.errors.password}
                handleValidate={handleValidate}
                type={'password'}
            />
            <Input
                className={'update-user__input'}
                name={'newEmail'}
                handleChange={handleChange}
                placeholder={transl.inputs.newEmail}
                value={inputs.values.newEmail}
                error={inputs.errors.newEmail}
                handleValidate={handleValidate}
            />
            <Button
                className={'update-user__button update-user__modal-btn'}
                onClick={handleSubmit}
                loading={updateEmail.loading}
            >
                {transl.save}
            </Button>
            <FormMessage success={updateEmail.success} error={updateEmail.error}/>
        </form>
    )
}

export default UpdateEmailForm
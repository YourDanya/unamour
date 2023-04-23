import {FC} from 'react'
import React from 'react'
import useUpdateEmailForm
    from 'app/[locale]/profile/update-user/components/other/update-email/update-email-form/update-email-form.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import {
    UpdateEmailFormProps
} from 'app/[locale]/profile/update-user/components/other/update-email/update-email-form/update-email.form.types'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import Input from 'app/[locale]/_common/components/input/input.component'

const UpdateEmailForm: FC<UpdateEmailFormProps> = (props) => {
    const {transl, onChange, onValidate, inputs, onSubmit, mappedUpdateEmail} = useUpdateEmailForm()

    return (
        <form className={'update-user__form update-user__modal-form'}>
            <div className={'update-user__title'}>{transl.title}</div>
            <Input
                className={'update-user__input'}
                name={'password'}
                onChange={onChange}
                placeholder={transl.inputs.password}
                value={inputs.values.password}
                error={inputs.errors.password}
                onValidate={onValidate}
                type={'password'}
            />
            <Input
                className={'update-user__input'}
                name={'newEmail'}
                onChange={onChange}
                placeholder={transl.inputs.newEmail}
                value={inputs.values.newEmail}
                error={inputs.errors.newEmail}
                onValidate={onValidate}
            />
            <Button
                className={'update-user__button update-user__modal-btn'}
                onClick={onSubmit}
                loading={mappedUpdateEmail.loading}
            >
                {transl.save}
            </Button>
            <FormMessage success={mappedUpdateEmail.success} error={mappedUpdateEmail.error}/>
        </form>
    )
}

export default UpdateEmailForm
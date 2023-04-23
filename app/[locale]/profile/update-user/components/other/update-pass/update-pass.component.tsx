import {UpdatePassProps} from 'app/[locale]/profile/update-user/components/other/update-pass/update-pass.types'
import Button from 'app/[locale]/_common/components/button/button.component'
import useUpdatePass from 'app/[locale]/profile/update-user/components/other/update-pass/update-pass.hook'
import {FC} from 'react'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import Input from 'app/[locale]/_common/components/input/input.component'

const UpdatePass : FC<UpdatePassProps> = (props) => {
    const {transl, onChange, onValidate, inputs, onSubmit, mappedUpdatePass} = useUpdatePass(props)

    return (
        <form className='update-user__modal-form'>
            <div className={'update-user__modal-title'}>
                {transl.title}
            </div>
            <Input
                className={'update-user__input'}
                name={'oldPassword'}
                placeholder={transl.inputs.oldPassword}
                type={'password'}
                value={inputs.values.oldPassword}
                onChange={onChange}
                error={inputs.errors.oldPassword}
                onValidate={onValidate}
            />
            <Input
                className={'update-user__input'}
                name={'newPassword'}
                placeholder={transl.inputs.newPassword}
                type={'password'}
                value={inputs.values.newPassword}
                onChange={onChange}
                error={inputs.errors.newPassword}
                onValidate={onValidate}
            />
            <Input
                className={'update-user__input'}
                name={'passwordConfirm'}
                placeholder={transl.inputs.passwordConfirm}
                type={'password'}
                value={inputs.values.passwordConfirm}
                onChange={onChange}
                error={inputs.errors.passwordConfirm}
                onValidate={onValidate}
                validateDeps={[inputs.values.oldPassword]}
            />
            <Button
                className={'update-user__button update-user__modal-btn'}
                onClick={onSubmit}
                loading={mappedUpdatePass.loading}
            >
                {transl.save}
            </Button>
            <FormMessage success={mappedUpdatePass.success} error={mappedUpdatePass.error}/>
        </form>
    )
}

export default UpdatePass
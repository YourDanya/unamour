import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import useUpdatePass from 'components/update-user/other/update-pass/update-pass.hook'
import FormMessage from 'components/common/form-message/form-message.component'
import {FC} from 'react'
import {UpdatePassProps} from 'components/update-user/other/update-pass/update-pass.types'

const UpdatePass : FC<UpdatePassProps> = (props) => {

    const {transl, handleChange, handleValidate, inputs, handleSubmit, updatePass} = useUpdatePass(props)

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
                handleChange={handleChange}
                error={inputs.errors.oldPassword}
                handleValidate={handleValidate}
            />
            <Input
                className={'update-user__input'}
                name={'newPassword'}
                placeholder={transl.inputs.newPassword}
                type={'password'}
                value={inputs.values.newPassword}
                handleChange={handleChange}
                error={inputs.errors.newPassword}
                handleValidate={handleValidate}
            />
            <Input
                className={'update-user__input'}
                name={'passwordConfirm'}
                placeholder={transl.inputs.passwordConfirm}
                type={'password'}
                value={inputs.values.passwordConfirm}
                handleChange={handleChange}
                error={inputs.errors.passwordConfirm}
                handleValidate={handleValidate}
                validateDeps={[inputs.values.oldPassword]}
            />
            <Button
                className={'update-user__button update-user__modal-btn'}
                onClick={handleSubmit}
                loading={updatePass.loading}
            >
                {transl.save}
            </Button>
            <FormMessage success={updatePass.success} error={updatePass.error}/>
        </form>
    )
}

export default UpdatePass
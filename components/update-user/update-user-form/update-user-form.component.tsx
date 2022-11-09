import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import {FC} from 'react'
import useUpdateUserForm from 'components/update-user/update-user-form/update-user-form.hook'
import FormMessage from 'components/common/form-message/form-message.component'

const UpdateUserForm: FC = () => {
    const {transl, onChange, onValidate, inputs, handleSubmit, updateUser} = useUpdateUserForm()

    return (
        <form className={'update-input-user__form'}>
            <div className={'update-input-user__title'}>{transl.title}</div>
            <Input
                className={'update-input-user__input update-input-user__name'}
                name={'name'}
                onChange={onChange}
                placeholder={transl.inputs.name}
                value={inputs.values.name}
                error={inputs.errors.name}
                onValidate={onValidate}
            />
            <Input
                className={'update-input-user__input update-input-user__surname'}
                name={'surname'}
                onChange={onChange}
                placeholder={transl.inputs.surname}
                value={inputs.values.surname}
                error={inputs.errors.surname}
                onValidate={onValidate}
            />
            <Input
                className={'update-input-user__input update-input-user__phone'}
                name={'phone'}
                onChange={onChange}
                placeholder={transl.inputs.phone}
                value={inputs.values.phone}
                error={inputs.errors.phone}
                onValidate={onValidate}
            />
            <Input
                className={'update-input-user__input update-input-user__birthDate'}
                name={'birthDate'}
                placeholder={transl.inputs.birthDate}
                onChange={onChange}
                value={inputs.values.birthDate}
                error={inputs.errors.birthDate}
                onValidate={onValidate}
            />
            <Button className={'update-input-user__button'} onClick={handleSubmit} loading={updateUser.loading}>
                {transl.save}
            </Button>
            <FormMessage error={updateUser.error} success={updateUser.success}/>
        </form>
    )
}

export default UpdateUserForm
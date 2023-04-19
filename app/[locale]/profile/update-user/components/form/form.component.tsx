import Button from 'app/[locale]/_common/components/button/button.component'
import useUpdateUserForm from 'app/[locale]/profile/update-user/components/form/form.hook'
import {FC} from 'react'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import Input from 'app/[locale]/_common/components/input/input.component'

const UpdateUserForm: FC = () => {
    const {transl, onChange, onValidate, inputs, handleSubmit, updateUser} = useUpdateUserForm()

    return (
        <form className={'update-user__form'}>
            <div className={'update-user__title'}>{transl.title}</div>
            <Input
                className={'update-user__input update-user__name'}
                name={'name'}
                onChange={onChange}
                placeholder={transl.inputs.name}
                value={inputs.values.name}
                error={inputs.errors.name}
                onValidate={onValidate}
            />
            <Input
                className={'update-user__input update-user__surname'}
                name={'surname'}
                onChange={onChange}
                placeholder={transl.inputs.surname}
                value={inputs.values.surname}
                error={inputs.errors.surname}
                onValidate={onValidate}
            />
            <Input
                className={'update-user__input update-user__phone'}
                name={'phone'}
                onChange={onChange}
                placeholder={transl.inputs.phone}
                value={inputs.values.phone}
                error={inputs.errors.phone}
                onValidate={onValidate}
            />
            <Input
                className={'update-user__input update-user__birthDate'}
                name={'birthDate'}
                placeholder={transl.inputs.birthDate}
                onChange={onChange}
                value={inputs.values.birthDate}
                error={inputs.errors.birthDate}
                onValidate={onValidate}
            />
            <Button className={'update-user__button'} onClick={handleSubmit} loading={updateUser.loading}>
                {transl.save}
            </Button>
            <FormMessage error={updateUser.error} success={updateUser.success}/>
        </form>
    )
}

export default UpdateUserForm
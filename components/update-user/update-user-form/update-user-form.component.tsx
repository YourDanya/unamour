import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import {FC} from 'react'
import useUpdateUserForm from 'components/update-user/update-user-form/update-user-form.hook'
import FormMessage from 'components/common/form-message/form-message.component'

const UpdateUserForm: FC = () => {
    const {transl, handleChange, handleValidate, inputs, handleSubmit, updateUser} = useUpdateUserForm()

    return (
        <form className={'update-user__form'}>
            <div className={'update-user__title'}>{transl.title}</div>
            <Input
                className={'update-user__input update-user__name'}
                name={'name'}
                handleChange={handleChange}
                placeholder={transl.inputs.name}
                value={inputs.values.name}
                error={inputs.errors.name}
                handleValidate={handleValidate}
            />
            <Input
                className={'update-user__input update-user__surname'}
                name={'surname'}
                handleChange={handleChange}
                placeholder={transl.inputs.surname}
                value={inputs.values.surname}
                error={inputs.errors.surname}
                handleValidate={handleValidate}
            />
            <Input
                className={'update-user__input update-user__phone'}
                name={'phone'}
                handleChange={handleChange}
                placeholder={transl.inputs.phone}
                value={inputs.values.phone}
                error={inputs.errors.phone}
                handleValidate={handleValidate}
            />
            <Input
                className={'update-user__input update-user__birthDate'}
                name={'birthDate'}
                placeholder={transl.inputs.birthDate}
                handleChange={handleChange}
                value={inputs.values.birthDate}
                error={inputs.errors.birthDate}
                handleValidate={handleValidate}
            />
            <Button className={'update-user__button'} onClick={handleSubmit} loading={updateUser.loading}>
                {transl.save}
            </Button>
            <FormMessage error={updateUser.error} success={updateUser.success}/>
        </form>
    )
}

export default UpdateUserForm
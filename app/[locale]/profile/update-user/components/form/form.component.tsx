import Button from 'app/_common/components/button/button.component'
import useUpdateUserForm from 'app/[locale]/profile/update-user/components/form/form.hook'
import {FC} from 'react'
import FormMessage from 'app/_common/components/form-message/form-message.component'
import Input from 'app/_common/components/input/input.component'

const UpdateUserForm: FC = () => {
    const {
        transl, onChange, onValidate, onSubmit, values, errors, mappedUpdateUser
    } = useUpdateUserForm()

    return (
        <form className={'update-user__form'}>
            <div className={'update-user__title'}>{transl.title}</div>
            <Input
                className={'update-user__input update-user__name'}
                name={'name'}
                onChange={onChange}
                placeholder={transl.inputs.name}
                value={values.name}
                error={errors.name}
            />
            <Input
                className={'update-user__input update-user__surname'}
                name={'surname'}
                onChange={onChange}
                placeholder={transl.inputs.surname}
                value={values.surname}
                error={errors.surname}
            />
            <Input
                className={'update-user__input update-user__phone'}
                name={'phone'}
                onChange={onChange}
                placeholder={transl.inputs.phone}
                value={values.phone}
                error={errors.phone}
            />
            <Input
                className={'update-user__input update-user__birthDate'}
                name={'birthDate'}
                placeholder={transl.inputs.birthDate}
                onChange={onChange}
                value={values.birthDate}
                error={errors.birthDate}
            />
            <Button 
                className={'update-user__button'} 
                onClick={onSubmit} 
                loading={mappedUpdateUser.loading}
            >
                {transl.save}
            </Button>
            <FormMessage error={mappedUpdateUser.error} success={mappedUpdateUser.success}/>
        </form>
    )
}

export default UpdateUserForm
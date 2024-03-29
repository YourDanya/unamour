import {DeleteUserProps} from 'app/[locale]/profile/update-user/components/other/delete-user/delete-user.types'
import useDeleteUser from 'app/[locale]/profile/update-user/components/other/delete-user/delete-user.hook'
import Button from 'app/_common/components/button/button.component'
import {FC} from 'react'
import FormMessage from 'app/_common/components/form-message/form-message.component'
import Input from 'app/_common/components/input/input.component'

const DeleteUser: FC<DeleteUserProps> = (props) => {
    const {transl, onChange, onValidate, inputs, onSubmit, mappedDeleteUser} = useDeleteUser(props)

    return (
        <form className='update-user__modal-form'>
            <div className={'update-user__modal-title'}>
                {transl.title}
            </div>
            <Input
                className={'update-user__input'}
                name={'password'}
                placeholder={transl.inputs.password}
                value={inputs.values.password}
                onChange={onChange}
                error={inputs.errors.password}
                onValidate={onValidate}
                type={'password'}
            />
            <Button
                className={'update-user__button update-user__modal-btn'}
                onClick={onSubmit}
                loading={mappedDeleteUser.loading}
            >
                {transl.delete}
            </Button>
            <FormMessage success={mappedDeleteUser.success} error={mappedDeleteUser.error}/>
        </form>
    )
}

export default DeleteUser
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import useDeleteUser from 'components/update-user/other/delete-user/delete-user.hook'
import {FC} from 'react'
import {DeleteUserProps} from 'components/update-user/other/delete-user/delete-user.types'
import FormMessage from 'components/common/form-message/form-message.component'

const DeleteUser: FC<DeleteUserProps> = (props) => {
    const {transl, handleChange, handleValidate, inputs, handleSubmit, deleteUser} = useDeleteUser(props)

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
                handleChange={handleChange}
                error={inputs.errors.password}
                handleValidate={handleValidate}
                type={'password'}
            />
            <Button
                className={'update-user__button update-user__modal-btn'}
                onClick={handleSubmit}
                loading={deleteUser.loading}
            >
                {transl.delete}
            </Button>
            <FormMessage success={deleteUser.success} error={deleteUser.error}/>
        </form>
    )
}

export default DeleteUser
import UpdateUserForm from 'components/update-user/update-user-form/update-user-form.component'
import UpdateUserSettings from 'components/update-user/other/settings.component'

const UpdateUser = () => {
    return (
        <div className={'update-user'}>
            <UpdateUserForm/>
            <UpdateUserSettings/>
        </div>
    )
}

export default UpdateUser
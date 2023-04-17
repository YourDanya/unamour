import {NextPageWithLayout} from 'types/types'
import {getProfileLayout} from 'components/profile/profile.component'
import UpdateUserForm from 'components/update-user/update-user-form/update-user-form.component'
import UpdateUserSettings from 'components/update-user/other/settings.component'
import UpdateUser from 'app/_profile/update-user/components/update-user.component'

const UpdateUserPage: NextPageWithLayout = () => {

    return (
        <UpdateUser/>
    )
}

UpdateUserPage.getLayout = getProfileLayout

export default UpdateUserPage

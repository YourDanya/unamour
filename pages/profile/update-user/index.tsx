import React from 'react'
import {NextPageWithLayout} from 'types/types'
import {getProfileLayout} from 'components/profile/profile.component'
import UpdateUserForm from 'components/update-user/update-user-form/update-user-form.component'
import UpdateUserSettings from 'components/update-user/other/settings.component'

const UpdateUser: NextPageWithLayout = () => {

    return (
        <div className={'update-user'}>
            <UpdateUserForm/>
            <UpdateUserSettings/>
        </div>
    )
}

UpdateUser.getLayout = getProfileLayout

export default UpdateUser

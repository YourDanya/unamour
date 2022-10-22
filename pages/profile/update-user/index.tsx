import React from 'react'
import {NextPageWithLayout} from 'types/types'
import {getProfileLayout} from 'components/profile/profile.component'
import UpdateUserForm from 'components/update-user/update-user-form/update-user-form.component'
import UpdateUserOther from 'components/update-user/other/other.component'

const UpdateUser: NextPageWithLayout = () => {

    return (
        <div className={'update-user'}>
            <UpdateUserForm/>
            <UpdateUserOther/>
        </div>
    )
}

UpdateUser.getLayout = getProfileLayout

export default UpdateUser

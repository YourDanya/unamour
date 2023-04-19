'use client'

import UpdateUserForm from 'app/[locale]/profile/update-user/components/form/form.component'
import UpdateUserSettings from 'app/[locale]/profile/update-user/components/other/settings.component'
import 'app/[locale]/profile/update-user/components/update-user.styles.sass'

const UpdateUser = () => {
    return (
        <div className={'update-user'}>
            <UpdateUserForm/>
            <UpdateUserSettings/>
        </div>
    )
}

export default UpdateUser
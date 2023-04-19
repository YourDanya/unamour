import {FC} from 'react'
import useUpdateEmail from 'app/[locale]/profile/update-user/components/other/update-email/update-email.hook'
import ActivateEmail
    from 'app/[locale]/profile/update-user/components/other/update-email/activate-email/activate-email.component'
import {UpdateEmailProps} from 'app/[locale]/profile/update-user/components/other/update-email/update-email.types'
import UpdateEmailForm
    from 'app/[locale]/profile/update-user/components/other/update-email/update-email-form/update-email-form.component'

const UpdateEmail : FC<UpdateEmailProps> = (props) => {
    const {hideModal} = props
    const {updateEmail, sendUpdateEmailCode} = useUpdateEmail(props)

    return (
        <>
            {0 ? (
                <ActivateEmail sendUpdateEmailCode={sendUpdateEmailCode} hideModal={hideModal}/>
            ) : (
                <UpdateEmailForm updateEmail={updateEmail}/>
            )}
        </>
    )
}

export default UpdateEmail
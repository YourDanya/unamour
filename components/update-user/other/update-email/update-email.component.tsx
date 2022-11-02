import {FC} from 'react'
import useUpdateEmail from 'components/update-user/other/update-email/update-email.hook'
import {UpdateEmailProps} from 'components/update-user/other/update-email/update-email.types'
import ActivateEmail from 'components/update-user/other/update-email/activate-email/activate-email.component'
import UpdateEmailForm from 'components/update-user/other/update-email/update-email-form/update-email-form.component'

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
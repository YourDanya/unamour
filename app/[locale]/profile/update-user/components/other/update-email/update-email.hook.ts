import {UpdateEmailProps} from 'app/[locale]/profile/update-user/components/other/update-email/update-email.types'
import {useUserStore} from 'app/_common/store/user/user.store'

const useUpdateEmail = (props: UpdateEmailProps) => {
    const updateEmail =  useUserStore(state => state.updateEmail)

    return {updateEmail}
}

export default useUpdateEmail
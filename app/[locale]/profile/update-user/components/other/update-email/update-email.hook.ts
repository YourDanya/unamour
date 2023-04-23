import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useEffect} from 'react'
import {useRef} from 'react'
import updateEmailContent from 'app/[locale]/profile/update-user/components/other/update-email/update-email.content'
import {UpdateEmailProps} from 'app/[locale]/profile/update-user/components/other/update-email/update-email.types'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useUserStore} from 'app/[locale]/_store/user/user.store'

const useUpdateEmail = (props: UpdateEmailProps) => {
    const updateEmail =  useUserStore(state => state.updateEmail)

    return {updateEmail}
}

export default useUpdateEmail
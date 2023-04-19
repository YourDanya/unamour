import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'app/[locale]/_redux/user/user.selectors'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {SelectTimerField} from 'app/[locale]/_redux/store.types'
import {useRef} from 'react'
import {sendUpdateEmailCodeAsync} from 'app/[locale]/_redux/user/user.thunk'
import updateEmailContent from 'app/[locale]/profile/update-user/components/other/update-email/update-email.content'
import {UpdateEmailProps} from 'app/[locale]/profile/update-user/components/other/update-email/update-email.types'

const useUpdateEmail = (props: UpdateEmailProps) => {
    const {hideModal} = props

    const [transl] = useLocale(updateEmailContent)

    const updateEmail = useParamSelector(selectUserField, 'updateEmail')
    const sendUpdateEmailCode = <SelectTimerField> useParamSelector(selectUserField, 'sendUpdateEmailCode')

    const dispatch = useDispatch()
    const sent = useRef(false)

    useEffect(() => {
        if (updateEmail.success && !sent.current) {
            sent.current = true
            dispatch(sendUpdateEmailCodeAsync())
        }
    }, [updateEmail.success])

    return {transl, updateEmail, sendUpdateEmailCode}
}

export default useUpdateEmail
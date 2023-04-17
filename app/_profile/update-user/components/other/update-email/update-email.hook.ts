import {UpdateEmailProps} from 'components/update-user/other/update-email/update-email.types'
import {useLocale} from 'hooks/other/other.hooks'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import updateEmailContent from 'components/update-user/other/update-email/update-email.content'
import {SelectTimerField} from 'redux/store.types'
import {useRef} from 'react'
import {sendUpdateEmailCodeAsync} from 'redux/user/user.thunk'

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
import {useRef} from 'react'
import {useState} from 'react'
import registerContent from 'app/[locale]/_components/layout/nav/nav-auth/register/register.content'
import {useEffect} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useUserStore} from 'app/[locale]/_store/user/user.store'

const useRegister = () => {
    const [transl] = useLocale(registerContent)
    const sendRegisterCode = useUserStore(state => state.sendRegisterCode)

    return {transl, sendRegisterCode}
}

export default useRegister
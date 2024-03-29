import {useRef} from 'react'
import {useState} from 'react'
import registerContent from 'app/[locale]/_components/layout/nav/nav-auth/register/register.content'
import {useEffect} from 'react'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {useUserStore} from 'app/_common/store/user/user.store'

const useRegister = () => {
    const [transl] = useLocale(registerContent)
    const register = useUserStore(state => state.register)

    return {transl, register}
}

export default useRegister
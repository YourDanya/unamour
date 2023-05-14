import {useRouter} from 'next/navigation'
import {useEffect} from 'react'
import {useModal} from 'app/[locale]/_common/hooks/component/component.hooks'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import layoutContent from 'app/[locale]/profile/_components/_layout/layout.content'
import {useUserStore} from 'app/[locale]/_store/user/user.store'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {useGetParamForImages} from 'app/[locale]/_common/hooks/other/other.hooks'

const useLayout = () => {
    const user = useUserStore(state => state.user)
    const setUser = useUserStore(state => state.setUser)
    const router = useRouter()

    const [transl, content] = useLocale(layoutContent)
    const [modalState, showModal, hideModal] = useModal({menu: false})

    const logout = useApiCall('auth/logout', {
        method: 'POST',
        onSuccess: () => {
            console.log('success logout')
            setUser(null)
        }
    })

    const onLogout: MouseAction = (event) => {
        event.preventDefault()
        logout.start()
    }

    useEffect(() => {
        if (user === null) {
            router.push('/')
        }
    }, [user])

    const {elemRef, width, height} = useGetParamForImages( 1600 / 7757)

    return {user, transl, content, modalState, showModal, hideModal, onLogout, logout, elemRef, width, height}
}

export default useLayout
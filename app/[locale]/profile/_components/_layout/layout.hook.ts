import {useRouter} from 'next/navigation'
import {useEffect} from 'react'
import useModal from 'app/_common/hooks/helpers/modal/modal.hook'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import layoutContent from 'app/[locale]/profile/_components/_layout/layout.content'
import {useUserStore} from 'app/_common/store/user/user.store'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {MouseAction} from 'app/_common/types/types'

const useLayout = () => {
    const user = useUserStore(state => state.user)
    const setUser = useUserStore(state => state.setUser)
    const router = useRouter()

    const [transl, content] = useLocale(layoutContent)
    const [modalState, showModal, hideModal] = useModal({menu: false})

    const logout = useApiCall('auth/logout', {
        method: 'POST',
        onSuccess: () => {
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

    return {user, transl, content, modalState, showModal, hideModal, onLogout, logout}
}

export default useLayout
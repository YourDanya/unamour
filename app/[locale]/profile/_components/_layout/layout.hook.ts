import {useRouter} from 'next/navigation'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {logoutAsync} from 'app/[locale]/_redux/user/user.thunk'
import {User} from 'app/[locale]/_redux/user/user.types'
import {selectUserField} from 'app/[locale]/_redux/user/user.selectors'
import {useModal} from 'app/[locale]/_common/hooks/component/component.hooks'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {selectUser} from 'app/[locale]/_redux/user/user.selectors'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {resetUserFieldSuccess} from 'app/[locale]/_redux/user/user.slice'
import layoutContent from 'app/[locale]/profile/_components/_layout/layout.content'

const useLayout = () => {
    const user = <User> useSelector(selectUser)
    const router = useRouter()

    const [transl, content] = useLocale(layoutContent)
    const [modalState, showModal, hideModal] = useModal({menu: false})

    const logout = useParamSelector(selectUserField, 'logout')
    const getUser = useParamSelector(selectUserField, 'getUser')

    const dispatch = useDispatch()
    const handleLogout = () => {
        if (!logout.loading) dispatch(logoutAsync())
    }
    useEffect(() => {
        if (logout.success) {
            router.push('/')
            dispatch(resetUserFieldSuccess('logout'))
        }
    }, [logout.success])

    useEffect(() => {
        if (!user && getUser.error) {
            router.push('/')
        }
    }, [user, getUser])

    return {user, transl, content, modalState, showModal, hideModal, handleLogout, logout}
}

export default useLayout
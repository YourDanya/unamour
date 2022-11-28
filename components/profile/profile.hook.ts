import {User} from 'redux/user/user.types'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {useModal} from 'hooks/component/component.hooks'
import {useEffect} from 'react'
import {logoutAsync} from 'redux/user/user.thunk'
import {selectUser} from 'redux/user/user.selectors'
import profileContent from 'components/profile/profile.content'
import {resetUserSuccess} from 'redux/user/user.slice'
import {useLocale} from 'hooks/other/other.hooks'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'

const useProfile = () => {
    const user = <User> useSelector(selectUser)
    const router = useRouter()

    const [transl, content] = useLocale(profileContent)
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
            dispatch(resetUserSuccess('logout'))
        }
    }, [logout.success])

    useEffect(() => {
        if (!user && getUser.error) {
            router.push('/')
        }
    }, [user, getUser])

    return {user, transl, content, modalState, showModal, hideModal, handleLogout, logout}
}

export default useProfile
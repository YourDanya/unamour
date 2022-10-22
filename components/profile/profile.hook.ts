import {User} from 'redux/user/user.types'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {useModal} from 'hooks/component/component.hooks'
import {useEffect} from 'react'
import {signOutAsync} from 'redux/user/user.thunk'
import {selectUser} from 'redux/user/user.selectors'
import profileContent from 'components/profile/profile.content'
import {resetSuccess} from 'redux/user/user.slice'
import {useLocale} from 'hooks/other/other.hooks'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'

const useProfile = () => {
    const user = useSelector(selectUser) as User
    const router = useRouter()
    
    const [transl, content] = useLocale(profileContent)
    const [modalState, showModal, hideModal] = useModal({menu: false})

    const signOut = useParamSelector(selectUserField, 'signOut')

    const dispatch = useDispatch()

    const handleSignOut = () => {
        if (!signOut.loading) dispatch(signOutAsync())
    }

    useEffect(() => {
        if (signOut.success) {
            router.push('/')
            dispatch(resetSuccess('signOut'))
        }
    }, [signOut.success])

    return {user, transl, content, modalState, showModal, hideModal, handleSignOut, signOut}
}

export default useProfile
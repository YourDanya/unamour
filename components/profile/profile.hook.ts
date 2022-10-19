import {User} from 'redux/user/user.types'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {useModal} from 'hooks/component/component.hooks'
import {useEffect} from 'react'
import {signOutAsync} from 'redux/user/user.thunk'
import {selectUserField, selectUser} from 'redux/user/user.selectors'
import profileContent from 'components/profile/profile.content'
import {resetSuccess} from 'redux/user/user.slice'
import {useLocale} from 'hooks/other/other.hooks'
import {useShallSelector} from 'hooks/enhanced/enhanced.hooks'
import {AppState} from 'redux/store'
import {useArgSelector} from 'hooks/enhanced/enhanced.hooks'
import {_selectUserField} from 'redux/user/user.selectors'

const useProfile = () => {
    const user = useSelector(selectUser) as User
    const router = useRouter()

    const [transl, content] = useLocale(profileContent)
    const [modalState, showModal, hideModal] = useModal({menu: false})

    const signOut = useArgSelector(_selectUserField, 'signOut')
    // const signOut = useShallSelector((state: AppState) => selectUserField(state, 'signOut'))

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
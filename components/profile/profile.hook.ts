import {User} from 'redux/user/user.types'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {useModal} from 'hooks/component/component.hooks'
import {useEffect} from 'react'
import {signOut} from 'redux/user/user.thunk'
import {selectField, selectUser} from 'redux/user/user.selectors'
import profileContent from 'components/profile/profile.content'
import {resetSuccess} from 'redux/user/user.slice'
import {useLocale} from 'hooks/event-handler.hooks'

const useProfile = () => {
    const user = useSelector(selectUser) as User
    const router = useRouter()

    const [content, translation] = useLocale(profileContent)
    const [modalState, showModal, hideModal] = useModal({menu: false})

    const {loading, success} = useSelector(selectField('signOut'))

    const dispatch = useDispatch()

    const handleSignOut = () => {
        if (!loading) dispatch(signOut())
    }

    useEffect(() => {
        if (success) {
            router.push('/')
            dispatch(resetSuccess('signOut'))
        }
    }, [success])

    return {user, translation, content, modalState, showModal, hideModal, handleSignOut, loading}
}

export default useProfile
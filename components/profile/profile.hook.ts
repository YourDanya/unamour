import {useDispatch, useSelector} from "react-redux"
import {useRouter} from "next/router"
import {User} from "../../redux/user/user.types"
import {useLocale} from "../../hooks/event-handler.hooks"
import profileContent from "./profile.content"
import {selectField, selectUser} from "../../redux/user/user.selectors"
import {useModal} from "../../hooks/component.hooks"
import {signOut} from "../../redux/user/user.thunk"
import {useEffect} from "react"
import {resetSuccess} from "../../redux/user/user.slice"

const useProfile = () => {
    const user = useSelector(selectUser) as User
    const router = useRouter()

    const [content, translation] = useLocale(profileContent)
    const [modalState, showModal, hideModal] = useModal({menu: false})

    const [loading, _, success] = useSelector(selectField('signOut'))

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
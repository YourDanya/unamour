import {useSelector} from "react-redux"
import {useRouter} from "next/router"
import {User} from "../../redux/user/user.types"
import {useLocale} from "../../hooks/event-handler.hooks"
import profileContent from "./profile.content"
import {useEffect, useLayoutEffect} from "react"
import {selectUser} from "../../redux/user/user.selectors"
import {useModal} from "../../hooks/component.hooks"

const useProfile = () => {
    const _user = useSelector(selectUser)
    const router = useRouter()

    const user = _user as User

    // useEffect(() => {
    //     if (!user) router.push('/')
    // }, [user])

    const [content, translation] = useLocale(profileContent)

    const [modalState, showModal, hideModal] = useModal({menu: false})

    return {user, translation, content, modalState, showModal, hideModal}
}

export default useProfile
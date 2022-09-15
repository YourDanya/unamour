import {useSelector} from "react-redux"
import {useRouter} from "next/router"
import {User} from "../../redux/user/user.types"
import {useLocale} from "../../hooks/event-handler.hooks"
import profileContent from "./profile.content"
import {useEffect, useLayoutEffect} from "react"
import {selectUser} from "../../redux/user/user.selectors"

const useProfile = () => {
    const _user = useSelector(selectUser)
    const router = useRouter()

    const user = _user as User

    useLayoutEffect(() => {
        if (!user) router.push('/')
    }, [user])

    const [content, translation] = useLocale(profileContent)

    return {user, translation, content}
}

export default useProfile
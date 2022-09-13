import {useSelector} from "react-redux";
import {selectUser} from "../../redux/user/user.slice";
import {useRouter} from "next/router";
import {User} from "../../redux/user/user.types";
import {useLocale} from "../../hooks/event-handler.hooks";
import profileContent from "./profile.content";
import {useLayoutEffect} from "react";

const useProfile = () => {
    const _user = useSelector(selectUser)
    const router = useRouter()

    const user = _user as User
    useLayoutEffect(() => {
        if (!user) router.push('/')
    }, [user])

    const [_, translation] = useLocale(profileContent)

    return {user, translation}
}

export default useProfile
import {useDispatch, useSelector} from "react-redux"
import {signIn} from "../../../redux/user/user.thunk"
import {MouseEvent, useEffect, useState} from "react"
import {useRouter} from "next/router"
import {selectField} from "../../../redux/user/user.selectors"
import {resetSuccess} from "../../../redux/user/user.slice"
import {useLocale, useToggle} from "../../../hooks/event-handler.hooks"
import signInContent from "./sign-in.content"
import {useInput} from "../../../hooks/input/input.hooks"

const useSignIn = () => {

    const [content, transl] = useLocale(signInContent)

    const [resetPass, handleResetPass] = useToggle()

    return { transl, resetPass, handleResetPass}
}

export default useSignIn
import signUpContent from 'components/sign-in-up/sign-up/sign-up.content'
import {useLocale} from 'hooks/other/other.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {AppState} from 'redux/store'
import {useShallSelector} from 'hooks/enhanced/enhanced.hooks'

const useSignUp = () => {
    const [transl] = useLocale(signUpContent)
    const register = useShallSelector((state: AppState) => selectUserField(state, 'register'))
    return {transl, register}
}

export default useSignUp
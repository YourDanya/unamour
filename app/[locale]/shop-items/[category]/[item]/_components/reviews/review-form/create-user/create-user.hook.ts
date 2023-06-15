import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {useMapApiRes} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {
    dictionary
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/create-user/create-user.content'

const useCreateUser = () => {
    const transl = useLocale(dictionary)

    const createUser = useApiCall('users/create')
    const onCreateUser: MouseAction = (event) => {
        event.preventDefault()
        createUser.start()
    }

    const mappedCreateUser = useMapApiRes({res: createUser,  successTransl: transl.success})

    return {createUser, onCreateUser, mappedCreateUser}
}

export default useCreateUser
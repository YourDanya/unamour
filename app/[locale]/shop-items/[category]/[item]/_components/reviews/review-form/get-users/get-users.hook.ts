import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {MouseAction} from 'app/_common/types/types'
import {ChangeValue} from 'app/_common/components/input-v2/input.types'
import {useState} from 'react'
import {dictionry} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/get-users/get-users.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {useMapApiRes} from 'app/_common/hooks/api/api.hooks'
import {useEffect} from 'react'
import {User} from 'app/_common/store/user/user.types'

const useGetUsers = () => {
    const transl = useLocale(dictionry)

    const [searchName, setSearchName] = useState('')
    const getUsers = useApiCall<{users: User[]}>('users')

    const onGetUsers: MouseAction = (event) => {
        event.preventDefault()
        getUsers.start()
    }

    const onChange = ({value} : ChangeValue<{name: string}>) => {
        setSearchName(value)
    }

    const mappedGetUsers = useMapApiRes({res: getUsers, successTransl: transl.success})

    const users = getUsers.data?.users

    return {getUsers, onGetUsers, searchName, transl, mappedGetUsers, onChange, users}
}

export default useGetUsers
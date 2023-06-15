import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {ChangeValue} from 'app/[locale]/_common/components/input-v2/input.types'
import {useState} from 'react'
import {dictionry} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/get-users/get-users.content'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {useMapApiRes} from 'app/[locale]/_common/hooks/api/api.hooks'

const useGetUsers = () => {
    const transl = useLocale(dictionry)

    const [searchName, setSearchName] = useState('')
    const getUsers = useApiCall('users/get')

    const onGetUsers: MouseAction = (event) => {
        event.preventDefault()
        getUsers.start()
    }

    const onChange = ({value} : ChangeValue<{name: string}>) => {
        setSearchName(value)
    }

    const mappedGetUsers = useMapApiRes({res: getUsers, successTransl: transl.success})

    return {getUsers, onGetUsers, searchName, transl, mappedGetUsers, onChange}
}

export default useGetUsers
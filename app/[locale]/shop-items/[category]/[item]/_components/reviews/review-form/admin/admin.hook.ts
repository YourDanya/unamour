import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {
    adminDictionary
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/admin/admin.content'
import {ChangeValue} from 'app/[locale]/_common/components/input-v2/input.types'
import {useState} from 'react'

const useAdmin = () => {
    const transl = useLocale(adminDictionary)
    const [searchName, setSearchName] = useState('')

    const onCreateUser = () => {

    }

    const onGetUsers = () => {

    }

    const onUserChange = ({value} : ChangeValue<{name: string}>) => {
        setSearchName(value)
    }

    return {transl, onCreateUser, onGetUsers, onUserChange, searchName}
}

export default useAdmin
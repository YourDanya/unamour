import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {useMapApiRes} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {
    dictionary
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/create-user/create-user.content'
import {ChangeValue} from 'app/[locale]/_common/components/input-v2/input.types'
import {useState} from 'react'
import {useRef} from 'react'
import {
    initValues
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/create-user/create-user.content'
import {useValidateInput} from 'app/[locale]/_common/hooks/input/input-v2.hooks'
import {
    validations
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/create-user/create-user.content'
import {
    initErrors
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/create-user/create-user.content'

const useCreateUser = () => {
    const transl = useLocale(dictionary)

    const createUser = useApiCall('users/create')

    const onCreateUser: MouseAction = (event) => {
        event.preventDefault()
        createUser.start()
    }

    const [values, setValues] = useState({...initValues})
    const valuesRef = useRef(values)

    const [errors, setErrors] = useState({...initErrors})

    const validateCallback = (newErrors: typeof errors) => {
        setErrors({...newErrors})
    }

    const {errRef, onValidate} = useValidateInput({
        errors, validations, validateCallback
    })

    const onChange = ({value, name}: ChangeValue<typeof values>) => {
        valuesRef.current[name] = value
        setValues({...valuesRef.current})
    }

    const mappedCreateUser = useMapApiRes({res: createUser, successTransl: transl.success})

    return {
        createUser, onCreateUser, mappedCreateUser, transl, onChange, values, errors
    }
}

export default useCreateUser
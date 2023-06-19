import {useState} from 'react'
import {useRef} from 'react'
import {ChangeValue} from 'app/[locale]/_common/components/input-v2/input.types'
import {initValues} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.content'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {dictionary} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.content'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {useUserStore} from 'app/[locale]/_store/user/user.store'
import {
    adminInitValues
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.content'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useValidateInput} from 'app/[locale]/_common/hooks/input/input-v2.hooks'
import {validations} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.content'
import {adminValidations} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.content'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'

const useReviewForm = () => {
    const mainState = useGetState()

    const {valuesRef, setValues, values, inputRef, setRating} = mainState

    const adminState = useGetAdminState()
    const {adminValues, adminValuesRef, setAdminValues} = adminState

    const {createReview} = useApiState({...mainState, ...adminState})

    const onRating: MouseAction = (event) => {
        const rating = +(event.currentTarget.getAttribute('data-value') as string)
        setRating(rating)
    }

    const onSubmit: MouseAction = (event) => {
        event.preventDefault()
        const valid = validate({...mainState, ...adminState})
        if (valid) {
            createReview.start()
        }
    }

    const onAddPhoto: MouseAction = (event) => {
        event.preventDefault()
        inputRef.current?.click()
    }

    return {
       ...mainState, ...adminState, onRating, onSubmit, onAddPhoto
    }
}

export default useReviewForm

const useGetState = () => {
    const [values, setValues] = useState({...initValues})
    const [errors, setErrors] = useState({...initValues})
    const transl = useLocale(dictionary)
    const valuesRef = useRef(values)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const isAdmin = useUserStore(state => state.user?.isAdmin ?? false)

    const [rating, setRating] = useState(5)
    const [photos, setPhotos] = useState<File[]>([])

    const {onValidate, errRef} = useValidateInput({
        validations, errors, validateCallback: (errors) => {
            setErrors(errors)
        }}
    )

    const onChange = ({value, name}: ChangeValue<typeof values>) => {
        valuesRef.current[name] = value
        setValues({...valuesRef.current})
        onValidate(name, value)
    }

    return {
        values, setValues, errors, setErrors, transl, valuesRef, inputRef, isAdmin, rating, setRating, photos,
        setPhotos, errRef, onValidate, onChange
    }
}

const useGetAdminState = () => {
    const [adminValues, setAdminValues] = useState({...adminInitValues})
    const adminValuesRef = useRef(adminValues)
    const [adminErrors, setAdminErrors] = useState({...adminInitValues})

    const {errRef: adminErrRef, onValidate: onAdminValidate} = useValidateInput({
        validations: adminValidations, errors: adminErrors, validateCallback: (errors) => {
            setAdminErrors(errors)
        }
    })

    const onAdminChange = ({value, name}: ChangeValue<typeof adminValues>) => {
        adminValuesRef.current[name] = value
        setAdminValues({...adminValuesRef.current})
        onAdminValidate(name, value)
    }

    return {
        adminValues, setAdminValues, adminValuesRef, onAdminChange, adminErrRef, onAdminValidate
    }
}

const useApiState = (params: ReturnType<typeof useGetState> & ReturnType<typeof useGetAdminState>) => {
    const {values, isAdmin, adminValues, setValues, setAdminValues} = params

    let body = {...values}

    if (isAdmin) {
        body = {...body, ...adminValues}
    }

    const createReview = useApiCall('users/review', {
        method: 'POST',
        body,
        onSuccess: () => {
            setValues({...initValues})
            setAdminValues({...adminInitValues})
        }
    })

    return {createReview}
}

const validate = (state: ReturnType<typeof useGetState> & ReturnType<typeof useGetAdminState>) => {
    const {values, onValidate, onAdminValidate, isAdmin, errRef, adminValues, adminErrRef} = state

    getEntries(values).forEach(([key, value]) => {
        onValidate(key, value)
    })

    if (!isAdmin) {
        return errRef.current.count === 0
    }

    getEntries(adminValues).forEach(([key, value]) => {
        onAdminValidate(key, value)
    })

    return errRef.current.count === 0
}
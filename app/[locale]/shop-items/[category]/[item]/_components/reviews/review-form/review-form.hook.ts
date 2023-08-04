import {useState} from 'react'
import {useRef} from 'react'
import {ChangeValue} from 'app/_common/components/input-v2/input.types'
import {initValues} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {dictionary} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.content'
import {MouseAction} from 'app/_common/types/types'
import {useUserStore} from 'app/_common/store/user/user.store'
import {
    adminInitValues
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.content'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {useValidateInput} from 'app/_common/hooks/input/input-v2.hooks'
import {
    validations
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.content'
import {
    adminValidations
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.content'
import getEntries from 'app/_common/utils/typescript/get-entries/get-entries.util'
import {useMapApiRes} from 'app/_common/hooks/api/api.hooks'
import {
    ReviewFormProps
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.types'

const useReviewForm = (props: ReviewFormProps) => {
    const mainState = useMainState(props)
    const {main: { inputRef, setRating, validateAll}} = mainState

    const adminState = useAdminState(mainState)
    const {admin: {validateAll: adminValidateAll}} = adminState

    const apiState = useApiState(adminState)

    const onRating: MouseAction = (event) => {
        const rating = +(event.currentTarget.getAttribute('data-value') as string)
        setRating(rating)
    }
    
    const onSubmit: MouseAction = (event) => {
        event.preventDefault()
        const validMain = validateAll()
        const validAdmin = adminValidateAll()
        if (validMain && validAdmin) {
            createBodyAndSend(apiState)
        }
    }

    const onAddPhoto: MouseAction = (event) => {
        event.preventDefault()
        inputRef.current?.click()
    }

    return {
        ...apiState, global: {onRating, onSubmit, onAddPhoto}
    }
}

export default useReviewForm

const useMainState = (props: ReviewFormProps) => {
    const [values, setValues] = useState({...initValues})
    const [errors, setErrors] = useState({...initValues})
    const transl = useLocale(dictionary)
    const valuesRef = useRef(values)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const [rating, setRating] = useState(5)
    const [photos, setPhotos] = useState<File[]>([])
    const [reset, setReset] = useState(false)

    const {onValidate, errRef} = useValidateInput({
            validations, errors, validateCallback: (errors) => {
                setErrors(errors)
            }
        }
    )

    const onChange = ({value, name}: ChangeValue<typeof values>) => {
        valuesRef.current[name] = value
        setValues({...valuesRef.current})
        onValidate(name, value)
    }

    const validateAll = () => {
        getEntries(values).forEach(([key, value]) => {
            onValidate(key, value)
        })
        return errRef.current.count === 0
    }

    const onBlur = ({name}: {name: keyof typeof values}) => {
        onValidate(name, valuesRef.current[name])
        setErrors({...errRef.current.errors})
    }

    const main = {
        values, setValues, errors, setErrors, transl, valuesRef, inputRef, rating, setRating, photos,
        setPhotos, onChange, validateAll, onBlur, reset, setReset
    }

    return {props, main}
}

const useAdminState = (state: ReturnType<typeof useMainState>) => {
    const isAdmin = useUserStore(state => state.user?.isAdmin ?? false)

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

    const validateAll = () => {
        if (!isAdmin) {
            return true
        }
        getEntries(adminValues).forEach(([key, value]) => {
            onAdminValidate(key, value)
        })
        return adminErrRef.current.count === 0
    }

    const onAdminBlur = ({name}: {name: keyof typeof adminValues}) => {
        onAdminValidate(name, adminValuesRef.current[name])
        setAdminErrors({...adminErrRef.current.errors})
    }

    const admin = {
        adminValues, setAdminValues, adminValuesRef, validateAll, isAdmin, onAdminChange, adminErrors, onAdminBlur
    }

    return {...state, admin}
}

const useApiState = (state: ReturnType<typeof useAdminState>) => {
    const {
        main: {values, setValues, transl, valuesRef, setRating, setPhotos, setReset},
        admin: {setAdminValues, isAdmin, adminValues, adminValuesRef},
        props: {shopItemId, color, getReviews, onHideModal, setIsAdded}
    } = state

    const onSuccess = () => {
        valuesRef.current = {...initValues}
        setValues(valuesRef.current)
        adminValuesRef.current = {...adminInitValues}
        setAdminValues(adminValuesRef.current)
        setRating(5)
        setPhotos([])
        setReset(true)
        getReviews.start()

        setTimeout(() => {
            onHideModal()
        }, 3000)

        setTimeout(() => {
            setIsAdded(true)
        }, 3600)
    }

    const createReview = useApiCall(`review/${shopItemId}/${color}`, {
        method: 'POST',
        onSuccess
    })

    const mappedCreateReview = useMapApiRes({
        res: createReview, successTransl: transl.success
    })

    return {...state, api: {createReview, mappedCreateReview}}
}

const createBodyAndSend = (state: ReturnType<typeof useApiState>) => {
    const {
        main: {values, rating, photos}, 
        admin: {isAdmin,  adminValues},
        api: {createReview}
    } = state

    let body = {...values, rating}

    if (isAdmin) {
        body = {...body, ...adminValues}
    }

    const data = new FormData()

    Object.entries({...body, ...photos}).forEach(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'object') {
            data.append(key, value)
        } else {
            data.append(key, value.toString())
        }
    })

    createReview.start(data)
}
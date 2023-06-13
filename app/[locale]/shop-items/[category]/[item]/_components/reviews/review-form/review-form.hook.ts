import {useState} from 'react'
import {useRef} from 'react'
import {ChangeValue} from 'app/[locale]/_common/components/input-v2/input.types'
import {initValues} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.content'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {dictionary} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.content'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {useUserStore} from 'app/[locale]/_store/user/user.store'

const useReviewForm = () => {
    const [values, setValues] = useState(initValues)
    const [errors, setErrors] = useState()
    const transl = useLocale(dictionary)
    const valuesRef = useRef(initValues)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const isAdmin = useUserStore(state => state.user?.isAdmin ?? false)

    const [rating, setRating] = useState(5)
    const [photos, setPhotos] = useState<File[]>([])

    const onChange = ({value, name}: ChangeValue<typeof values>) => {
        valuesRef.current[name] = value
        setValues({...valuesRef.current})
    }

    const onRating: MouseAction = (event) => {
        const rating = +(event.currentTarget.getAttribute('data-value') as string)
        setRating(rating)
    }

    const onSubmit: MouseAction = (event) => {
        event.preventDefault()
    }

    const onAddPhoto: MouseAction = (event) => {
        event.preventDefault()
        inputRef.current?.click()
    }

    return {
        values, errors, onChange, transl, rating, onRating, onSubmit, onAddPhoto, inputRef, setPhotos, photos, isAdmin
    }
}

export default useReviewForm
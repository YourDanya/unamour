import {VariantWithValidateState} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.types'
import {updateErrorCount} from 'app/_common/utils/form/update-error-count/update-error-count.util'
import {validateInputAndCount} from 'app/_common/utils/form/validate-input-and-count/validate-input-and-count'
import {useGetState} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.hook'
import {VariantState} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.types'
import {ValuesName} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.types'
export const validateValuesAndCount = (state: VariantWithValidateState) => {
    const {errorCountRef, props: {setErrorCount, errorCount}} = state

    const callback = () => {
        validateValues(state)
    }

    updateErrorCount({
        errorCountRef, setErrorCount, errorCount, callback
    })
}

const validateColor = (state: VariantState) => {
    const {values, variants, props: {variantIndex}, errors, errorCountRef} = state

    if (errors.color) {
        return
    }

    const isColorNotUnique = variants.some(({color}, index) => {
        return values.color === color && variantIndex !== index
    })

    if (isColorNotUnique) {
        errorCountRef.current++
    }
}
export const validateSize = (state: VariantState) => {
    const {sizes, sizeError, setSizeError, transl, errorCountRef} = state

    if (sizes.length === 0 && !sizeError) {
        setSizeError(transl.sizeError)
        errorCountRef.current++
    }

    if (sizes.length > 0 && sizeError) {
        setSizeError('')
        errorCountRef.current--
    }
}
const validateValues = (state: VariantWithValidateState) => {
    const {errors, setErrors, validations, locale, validateName, values, errorCountRef} = state

    validateInputAndCount({
        validations, errors, errorCountRef, locale, name: validateName as ValuesName, values
    })

    if (!validateName || validateName === 'color') {
        validateColor(state)
    }

    if (!validateName || validateName === 'size') {
        validateSize(state)
    }

    setErrors({...errors})
}

export const clearErrors = (state: ReturnType<typeof useGetState>) => {
    const {errorCountRef, props: {setErrorCount, errorCount}} = state
    if (errorCountRef.current !== 0) {
        setErrorCount(errorCount - errorCountRef.current)
    }
}
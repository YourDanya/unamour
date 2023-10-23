import {updateErrorCount} from 'app/_common/utils/form/update-error-count/update-error-count.util'
import {validateInputAndCount} from 'app/_common/utils/form/validate-input-and-count/validate-input-and-count'
import {CommonValidateState} from 'app/[locale]/admin/items/_components/item-form/common/common.types'
import {CommonValidateSlugState} from 'app/[locale]/admin/items/_components/item-form/common/common.types'

export const validateSlugAndCount = (state: CommonValidateSlugState) => {
    const {errorCountRef, props: {setErrorCount, formErrCountRef}, valid} = state

    const callback = () => {
        validateSlug({...state, valid})
    }

    updateErrorCount({
        errorCountRef, setErrorCount, formErrCountRef, callback
    })
}

const validateSlug = (state: CommonValidateSlugState) => {
    const {valid, errors, transl} = state

    if (valid && errors.slug) {
        errors.slug = ''
    }
    if (!valid && !errors.slug) {
        errors.slug = transl.uniqueSlug
    }
}

export const validateValuesAndCount = (state: CommonValidateState) => {
    const {errorCountRef, props: {setErrorCount, formErrCountRef}} = state

    const callback = () => {
        validateValues(state)
    }

    updateErrorCount({
        errorCountRef, setErrorCount, formErrCountRef, callback
    })
}

const validateValues = (state: CommonValidateState) => {
    const {errors, setErrors, validations, locale, validateName, values, errorCountRef} = state

    validateInputAndCount({
        validations, errors, errorCountRef, locale, name: validateName, values
    })
    setErrors({...errors})
}
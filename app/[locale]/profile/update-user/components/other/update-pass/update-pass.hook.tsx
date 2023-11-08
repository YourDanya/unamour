import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useInput} from 'app/_common/hooks/input/input.hooks'
import {useEffect} from 'react'
import {UpdatePassProps} from 'app/[locale]/profile/update-user/components/other/update-pass/update-pass.types'
import updatePassContent from 'app/[locale]/profile/update-user/components/other/update-pass/update-pass.content'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {useMapApiRes} from 'app/_common/hooks/api/api.hooks'

const useUpdatePass = (props: UpdatePassProps) => {
    const {hideModal} = props

    const [transl, content] = useLocale(updatePassContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs, transl.inputs)

    const updatePass = useApiCall( 'auth/update-password', {
        method: 'POST',
        body: inputs.values
    })

    const onSubmit = withSubmit(() => {
        updatePass.start()
    })

    useEffect(() => {
        if (updatePass.success) {
            resetValues()
            setTimeout(() => {
                hideModal()
            }, 3000)
        }
    }, [updatePass.success])

    const mappedUpdatePass = useMapApiRes({
        res: updatePass, errorFourTransl: transl.error, successTransl: transl.success
    })

    return {transl, onChange, onValidate, inputs, onSubmit, mappedUpdatePass}
}

export default useUpdatePass
import updateInputContent from 'app/[locale]/_common/components/update-input/update-input.content'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {UpdateInputProps} from 'app/[locale]/_common/components/update-input/update-input.types'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useState} from 'react'

const useUpdateInput = (props: UpdateInputProps) => {
    const [transl] = useLocale(updateInputContent)
    const {index, value, validations={}} = props
    const {inputs, onChange, onValidate} = useInput({name: {value, validations}})
    const [active, setActive] = useState(false)

    const onUpdate: MouseAction = (event) => {
        setActive(!active)
        if (active) {
            if (value !== inputs.values.name) props.onSave(index, value)
        }
    }

    const onDelete = () => {
        props.onDelete(index)
    }

    return {transl, onUpdate, active, inputs, onChange, onValidate, onDelete}
}

export default useUpdateInput
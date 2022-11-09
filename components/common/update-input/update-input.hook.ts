import {useLocale} from 'hooks/other/other.hooks'
import updateInputContent from 'components/common/update-input/update-input.content'
import {useToggle} from 'hooks/event-handler/event-handler.hooks'
import {MouseAction} from 'types/types'
import {UpdateInputProps} from 'components/common/update-input/update-input.types'
import {useInput} from 'hooks/input/input.hooks'

const useUpdateInput = (props: UpdateInputProps) => {
    const [transl] = useLocale(updateInputContent)
    const {index, value, validations={}} = props
    const {inputs, onChange, onValidate} = useInput({name: {value, validations}})
    const [active, toggleActive] = useToggle()

    const onUpdate: MouseAction = (event) => {
        toggleActive(event)
        if (active) {
            if (value !== inputs.values.name) props.onSave(index, value)
        }
    }

    const onDelete = () => {
        props.onDelete(index)
    }

    return {transl, onUpdate, active, toggleActive, inputs, onChange, onValidate, onDelete}
}

export default useUpdateInput
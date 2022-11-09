import {FC} from 'react'
import Button from 'components/common/button/button.component'
import Input from 'components/common/input/input.component'
import {UpdateInputProps} from 'components/common/update-input/update-input.types'
import useUpdateInput from 'components/common/update-input/update-input.hook'

const UpdateInput: FC<UpdateInputProps> = (props) => {
    const {onSave: _, onDelete: __, ...other} = props
    const {transl, active, onUpdate, inputs, onChange, onValidate, onDelete} = useUpdateInput(props)

    return (
        <div className={'update-input'}>
            <div className={'update-input__content'}>
                {props.value}
            </div>
            <Input
                className={`update-input__input ${active? '' : ''}`}
                name={'name'}
                placeholder={'placeholder'}
                value={inputs.values.name}
                onChange={onChange}
                error={inputs.errors.name}
                onValidate={onValidate}
            />
            <Button className={'update-input__button'} onClick={onUpdate}>
                {transl.update}
            </Button>
            <Button className={'update-input__button'} onClick={onDelete}>
                {transl.delete}
            </Button>
        </div>
    )
}

export default UpdateInput
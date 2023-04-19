'use client'

import {FC} from 'react'
import {UpdateInputProps} from 'app/[locale]/_common/components/update-input/update-input.types'
import Button from 'app/[locale]/_common/components/button/button.component'
import useUpdateInput from 'app/[locale]/_common/components/update-input/update-input.hook'
import Input from 'app/[locale]/_common/components/input/input.component'
import 'app/[locale]/_common/components/update-input/update-input.styles.sass'

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
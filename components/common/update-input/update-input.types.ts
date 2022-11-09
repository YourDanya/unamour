import {Validations} from 'hooks/input/input.types'
import {InputProps} from 'components/common/input/input.types'

export type UpdateInputProps = {
    onDelete: (index: number) => void,
    onSave: (index: number, value: string) => void,
    value: string,
    index: number,
    validations?: Validations
} & Partial<InputProps>

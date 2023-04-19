import {Validations} from 'app/[locale]/_common/hooks/input/input.types'
import {InputProps} from 'app/[locale]/_common/components/input/input.types'

export type UpdateInputProps = {
    onDelete: (index: number) => void,
    onSave: (index: number, value: string) => void,
    value: string,
    index: number,
    validations?: Validations
} & Partial<InputProps>

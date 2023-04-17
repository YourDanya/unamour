import {MouseAction} from 'types/types'
import {SelectField} from 'redux/store.types'

export type CartOrderProps = {
    total: number,
    onSubmit: MouseAction,
    createOrder: SelectField
}
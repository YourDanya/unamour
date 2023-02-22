import {MouseAction} from 'types/types'
import {SelectField} from 'redux/store.types'

export type OrderProps = {
    total: number,
    className: string,
    onSubmit: MouseAction,
    createOrder: SelectField
}
import {SelectField} from 'app/[locale]/_redux/store.types'
import {MouseAction} from 'app/[locale]/_common/types/types'

export type CartOrderProps = {
    total: number,
    onSubmit: MouseAction,
    createOrder: SelectField
}
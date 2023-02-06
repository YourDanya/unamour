import {MouseAction} from 'types/types'
import {AdminIdField} from 'redux/admin/admin.types'

export type ItemMessageProps = {
    success: string | null,
    error: string | null,
    onClose: MouseAction,
    onTimerExpiration: (field: AdminIdField) => void
    field: AdminIdField,
    isMessage: boolean
}
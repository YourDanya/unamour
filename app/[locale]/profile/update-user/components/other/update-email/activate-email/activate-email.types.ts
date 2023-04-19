import {SelectTimerField} from 'app/[locale]/_redux/store.types'

export type ActivateEmailProps = {
    sendUpdateEmailCode: SelectTimerField,
    hideModal: () => void
}
import {SelectTimerField} from 'redux/store.types'

export type ActivateEmailProps = {
    sendUpdateEmailCode: SelectTimerField,
    hideModal: () => void
}
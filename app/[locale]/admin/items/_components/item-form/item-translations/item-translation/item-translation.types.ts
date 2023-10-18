import {Locale} from 'app/_common/types/types'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import {
    initValues
} from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translation/item-translation.content'
import {
    useGetState
} from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translation/item-translation.hook'

export type ItemTranslationProps = {
    locale: Locale
} & ItemFormState

export type ValidateValuesState = ReturnType<typeof useGetState> & { validateName?: keyof typeof initValues }
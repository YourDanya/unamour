import {Locale} from 'app/_common/types/types'
import {initValues} from 'app/[locale]/admin/items/_components/item-form/translations/translation/translation.content'
import {useGetState} from 'app/[locale]/admin/items/_components/item-form/translations/translation/translation.hook'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'

export type ItemTranslationProps = {
    locale: Locale
} & ItemFormState

export type ValidateValuesState = ReturnType<typeof useGetState> & { validateName?: keyof typeof initValues }
import {useGetState} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.hook'
import {initInputs} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.content'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'

export type ItemVariantProps = {
    variantIndex: number
} & ItemFormState

export type ColorsMap = { styles: { backgroundColor: string }[], labels: string[], values: string[] }

export type VariantState = ReturnType<typeof useGetState>

export type ValuesName = keyof typeof initInputs

export type VariantWithValidateState = VariantState & { validateName?: ValuesName | 'size'}
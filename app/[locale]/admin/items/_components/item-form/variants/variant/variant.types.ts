import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import {useGetState} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.hook'

export type ItemVariantProps = {
    variantIndex: number
} & ItemFormState

export type ColorsMap = { styles: { backgroundColor: string }[], labels: string[], values: string[] }

export type VariantState = ReturnType<typeof useGetState>
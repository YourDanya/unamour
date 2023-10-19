import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import {useGetState} from 'app/[locale]/admin/items/_components/item-form/common/common.hook'
import {initValues} from 'app/[locale]/admin/items/_components/item-form/common/common.content'

export type CommonProps = ItemFormState

export type CommonState = ReturnType<typeof useGetState>

export type CommonValidateState = CommonState & { validateName?: keyof typeof initValues }

export type CommonValidateSlugState =  CommonState & {valid: boolean}
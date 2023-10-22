import {useGestState} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/images.hook'
import {ChangeEvent} from 'react'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'

export type ImagesProps = {
    variantIndex: number
} & ItemFormState

export type ImagesState = ReturnType<typeof useGestState>

export type WithEventState = ImagesState & {event: ChangeEvent<HTMLInputElement>}
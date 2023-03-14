import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {ImageFiles} from 'components/admin/item-form/item-form.types'
import {useApiCall} from 'utils/api/api-v2.utils'
import {itemButtonsContent} from 'components/admin/item-form/item-buttons/item-buttons.content'

export type ItemButtonsProps = {
    itemValue: MutableRefObject<FetchedItem>,
    imageValues: MutableRefObject<ImageFiles>,
    _id: string,
    deleted: boolean,
    updateTime: string,
    initImageValues: MutableRefObject<ImageFiles>,
    errorCount: MutableRefObject<number>
}

export type ItemButtonsActionName = keyof typeof itemButtonsContent.common.actions

export type ItemButtonsActions = Record<ItemButtonsActionName, ReturnType<typeof useApiCall>>
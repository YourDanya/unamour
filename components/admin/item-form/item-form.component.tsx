import {FC, ReactNode} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import useItemForm from 'components/admin/item-form/item-form.hook'
import React from 'react'

const ItemForm: FC<FetchedItem> = (props) => {
    const {common: {special, oldPrice, slug, slugCategory, best, }, translations} = props
    const {} = useItemForm(props)

    return (
        <form>

        </form>
    )
}

export default ItemForm


import {CategoryItem} from 'redux/shop-items/shop-items.types'
import ShopItemPreview from 'components/shop-item-preview/shop-item-preview.component'
import {apiCall} from 'utils/api/api-v3.utils'
import {Suspense} from 'react'

const Test = async () => {
    let time = performance.now()
    const {data, error} = await apiCall<{ items: CategoryItem[] }>('shop-item/category/all', {cache: 'no-store'})

    const items = data?.items

    console.log('items', items)

    return (
        <div className={'test'}>
            {/*<Suspense fallback={<div>...Loading</div>}>*/}

            {/*</Suspense>*/}
        </div>
    )
}

export default Test
import {ItemFormProps} from 'components/admin/items/item-form/item-form.types'
import {useLocale} from 'hooks/other/other.hooks'
import itemFormContent from 'components/admin/items/item-form/item-form.content'
import {StoreApi} from 'zustand/esm'
import {createItemFormStore} from 'components/admin/items/item-form/store/item-form.store'
import {useRef} from 'react'
import {createItemImagesValues} from 'components/admin/items/item-form/utils/item-form.utils'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'
import {ItemFormState} from 'components/admin/items/item-form/store/item-form.types'
import {createItemImagesMap} from 'components/admin/items/item-form/utils/item-form.utils'
import {usePaginationStore} from 'components/common/pagination/store/pagination.stote'
import {useCallback} from 'react'
import {shallow} from 'zustand/shallow'
import {peek} from 'utils/main/main.utils'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {PaginationState} from 'components/common/pagination/store/pagination.types'

const useItemForm = (props: ItemFormProps) => {
    const test = useRef(performance.now())
    test.current = performance.now()

    const [transl] = useLocale(itemFormContent)

    const {data: itemValue, itemIndex} = usePaginationStore(useCallback((state) => {
        return peek(state, ['data', 'itemIndex'])
    }, []), shallow) as PaginationState<FetchedItem>

    useOmitFirstEffect(() => {
        const itemImagesValues = createItemImagesValues({itemValue})
        const {itemValueRef, itemImagesValuesRef, initItemImagesMapRef} = storeRef.current.getState()

        itemValueRef.current = JSON.parse(JSON.stringify(itemValue))
        itemImagesValuesRef.current = JSON.parse(JSON.stringify(itemImagesValues))

        initItemImagesMapRef.current = createItemImagesMap({itemImagesValues, itemValue})

        storeRef.current.setState({itemValue, itemImagesValues})
    }, [itemValue])

    const storeRef = useRef<StoreApi<ItemFormState>>(createItemFormStore({itemValue}))

    return {
        storeRef, transl, itemIndex, deleted: itemValue.deleted
    }
}

export default useItemForm

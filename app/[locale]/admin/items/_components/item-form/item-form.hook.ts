import {PaginationState} from 'app/[locale]/_common/components/pagination/store/pagination.types'
import {useOmitFirstEffect} from 'app/[locale]/_common/hooks/component/component.hooks'
import {createItemImagesMap} from 'app/[locale]/admin/items/_components/item-form/utils/item-form.utils'
import {useRef} from 'react'
import {StoreApi} from 'zustand'
import {ItemFormProps} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {peek} from 'app/[locale]/_common/utils/main/main.utils'
import {FetchedItem} from 'app/[locale]/_common/types/types'
import {createItemImagesValues} from 'app/[locale]/admin/items/_components/item-form/utils/item-form.utils'
import {useCallback} from 'react'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/store/item-form.types'
import {usePaginationStore} from 'app/[locale]/_common/components/pagination/store/pagination.stote'
import {createItemFormStore} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import itemFormContent from 'app/[locale]/admin/items/_components/item-form/item-form.content'
import {shallow} from 'zustand/shallow'

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

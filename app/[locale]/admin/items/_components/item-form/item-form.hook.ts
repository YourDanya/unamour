import {PaginationState} from 'app/_common/components/pagination/store/pagination.types'
import useOmitFirstEffect from 'app/_common/hooks/helpers/omit-first-effect/omit-first-effect.hook'
import {createItemImagesMap} from 'app/[locale]/admin/items/_components/item-form/utils/item-form.utils'
import {useRef} from 'react'
import {StoreApi} from 'zustand'
import {ItemFormProps} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {peek} from 'app/_common/utils/helpers/peek/peek.util'
import {FetchedItem} from 'app/_common/types/fetched-item'
import {createItemImagesValues} from 'app/[locale]/admin/items/_components/item-form/utils/item-form.utils'
import {useCallback} from 'react'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/store/item-form.types'
import {usePaginationStore} from 'app/_common/components/pagination/store/pagination.stote'
import {createItemFormStore} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import itemFormContent from 'app/[locale]/admin/items/_components/item-form/item-form.content'
import {shallow} from 'zustand/shallow'
import {AdminItem} from 'app/[locale]/admin/items/_components/store/admin-items.types'

const useItemForm = (props: ItemFormProps) => {
    const test = useRef(performance.now())
    test.current = performance.now()

    const [transl] = useLocale(itemFormContent)

    const {data: itemValue, itemIndex} = usePaginationStore(useCallback((state) => {
        return peek(state, ['data', 'itemIndex'])
    }, []), shallow) as PaginationState<AdminItem>

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

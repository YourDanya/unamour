import useOmitFirstEffect from 'app/_common/hooks/helpers/omit-first-effect/omit-first-effect.hook'
import {createItemImagesMap} from 'app/[locale]/admin/items/_components/item-form/utils/item-form.utils'
import {useRef} from 'react'
import {StoreApi} from 'zustand'
import {ItemFormProps} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {createItemImagesValues} from 'app/[locale]/admin/items/_components/item-form/utils/item-form.utils'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/store/item-form.types'
import {createItemFormStore} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import itemFormContent from 'app/[locale]/admin/items/_components/item-form/item-form.content'

const useItemForm = (props: ItemFormProps) => {
    const [transl] = useLocale(itemFormContent)

    const {data: itemValue, itemIndex} = props

    useOmitFirstEffect(() => {
        const itemImagesValues = createItemImagesValues({itemValue})
        const {itemValueRef, itemImagesValuesRef, initItemImagesMapRef} = storeRef.current.getState()

        itemValueRef.current = JSON.parse(JSON.stringify(itemValue))
        itemImagesValuesRef.current = JSON.parse(JSON.stringify(itemImagesValues))

        initItemImagesMapRef.current = createItemImagesMap({itemImagesValues, itemValue})

        storeRef.current.setState({itemValue, itemImagesValues, itemIndex})
    }, [])

    const storeRef = useRef<StoreApi<ItemFormState>>(createItemFormStore({itemValue, itemIndex}))

    return {
        storeRef, transl, itemIndex, deleted: itemValue.deleted
    }
}

export default useItemForm

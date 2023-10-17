import {FormValue} from 'app/[locale]/admin/items/_components/admin-items.types'
import {useState} from 'react'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/item-form.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
const useItemForm = (props: FormValue) => {
    const transl = useLocale(dictionary)

    const {item, itemIndex} = props

    const [itemValue, setItemValue] = useState(item)
    const [errorCount, setErrorCount] = useState(0)

    return {
        transl, itemValue, setItemValue, errorCount, setErrorCount
    }
}

export default useItemForm

export type ItemFormState = ReturnType<typeof useItemForm>
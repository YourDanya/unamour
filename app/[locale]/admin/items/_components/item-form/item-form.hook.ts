import {FormValue} from 'app/[locale]/admin/items/_components/admin-items.types'
import {useState} from 'react'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/item-form.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {useRef} from 'react'
import {useEffect} from 'react'
const useItemForm = (props: FormValue) => {

    const time = useRef(0)

    // time.current = performance.now()

    const transl = useLocale(dictionary)
    const {item} = props

    const initSlug = item.slug

    const [itemValue, setItemValue] = useState(item)
    const [errorCount, setErrorCount] = useState(0)

    console.log('itemValue', itemValue)

    // useEffect(() => {
    //     console.log(performance.now() - time.current)
    // })

    return {
        transl, itemValue, setItemValue, errorCount, setErrorCount, initSlug
    }
}

export default useItemForm

export type ItemFormState = ReturnType<typeof useItemForm>
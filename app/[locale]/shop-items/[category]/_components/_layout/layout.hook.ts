import {useState} from 'react'
import {useMemo} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {categoriesContent} from 'app/[locale]/_content/content'
import {colorContent} from 'app/[locale]/_content/content'
import {LayoutProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {useRouter} from 'next/navigation'
import {dictionary} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.content'
import {useLocale as useDeprLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {useSearchParams} from 'next/navigation'
import {filterNames} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.content'
import {router} from 'next/client'
import {ReadonlyURLSearchParams} from 'next/navigation'
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context'
import {useRef} from 'react'
import {FilterValues} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {useDebounce} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'

const useLayout = (props: LayoutProps) => {
    const transl = useLocale(dictionary)
    const categories = useDeprLocale(categoriesContent)
    const router = useRouter()

    const [reset, setReset] = useState(false)

    const onReset: MouseAction = () => {
        // if (path!==mainPath) {
        //     router.push(`${mainPath}?reset`, mainPath)
        // }
    }

    const {createFilter} = useCreateFilter()

    const paramsUrl = ''

    return {transl, onReset, reset, setReset, categories, createFilter, paramsUrl}
}

export default useLayout

const useCreateFilterState = () => {
    const params = useSearchParams()
    const router = useRouter()
    const valuesRef = useRef<Record<string, string>>({})

    return {params, router, valuesRef}
}

const useCreateFilter = () => {
    const state = useCreateFilterState()
    const {valuesRef} = state

    const createFilterDebounced = useDebounce( (valParams: { value: string, name: string }) => {
        createFilter({...state, ...valParams})
    })

    const doCreateFilter = ({value, name}: {value: string, name: string}) => {
        valuesRef.current[name] = value
        createFilterDebounced({value, name})
    }

    return {createFilter: doCreateFilter, valuesRef}
}

const createFilter = ({value, name, params, router}:
                          { value: string, name: string} & ReturnType<typeof useCreateFilterState>) => {

    const newUrl = filterNames.reduce((url, filterName) => {
        if (filterName === name) {
            const newValue = `${name}=${value}`
            url = addValueToUrl({value: newValue, url})
        } else if (params.get(filterName)) {
            const newValue = `${filterName}=${params.get(filterName)}`
            url = addValueToUrl({value: newValue, url})
        }
        return url
    }, '')

}

const addValueToUrl = ({value, url}: { value: string, url: string }) => {
    if (url === '') {
        url += `?${value}`
    } else {
        url += `&${value}`
    }
    return url
}
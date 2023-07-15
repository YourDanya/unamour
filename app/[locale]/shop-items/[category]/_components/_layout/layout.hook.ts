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
import {usePathname} from 'next/navigation'
import {useEffect} from 'react'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {useParams} from 'next/navigation'
import {Locale} from 'app/[locale]/_common/types/types'
import {getKeys} from 'app/[locale]/_common/utils/main/main.utils'

const useLayout = (props: LayoutProps) => {
    const transl = useLocale(dictionary)
    const categories = useDeprLocale(categoriesContent)
    const locale = useParams().locale as Locale

    const state = useCreateFilter()
    const {pathname, router, paramsUrl} = state

    const onReset: MouseAction = () => {
        if (paramsUrl !== '') {
            router.push(pathname)
        }
    }

    return {...state, transl, onReset, categories, locale}
}

export default useLayout

const useCreateFilterState = () => {
    const params = useSearchParams()
    const router = useRouter()
    const paramValuesRef = useRef<Record<string, string>>({})
    const pathname = usePathname()
    const [paramsUrl, setParamsUrl] = useState(params.toString().replaceAll('%2C', ','))

    useEffect(() => {
        params.forEach((value, key) => {
            paramValuesRef.current[key] = value
        })
    }, [params])

    return {params, router, paramValuesRef, pathname, paramsUrl, setParamsUrl}
}

const useCreateFilter = () => {
    const state = useCreateFilterState()
    const {paramValuesRef} = state

    const createFilterDebounced = useDebounce( (valParams) => {
        createFilter(state)
    })

    const doCreateFilter = ({value, name}: {value: string, name: string}) => {
        paramValuesRef.current[name] = value
        createFilterDebounced(state)
    }

    return {...state, createFilter: doCreateFilter, paramValuesRef}
}

const createFilter = (state: ReturnType<typeof useCreateFilterState>) => {
    const {params, router, paramValuesRef, pathname, setParamsUrl} = state

    const paramsUrl = filterNames.reduce((url, filterName) => {
        let filterValue = paramValuesRef.current[filterName]
        if (filterValue) {
            const newValue = `${filterName}=${filterValue}`
            url = addValueToUrl({value: newValue, url})
        } else if (params.get(filterName)) {
            const newValue = `${filterName}=${params.get(filterName)}`
            url = addValueToUrl({value: newValue, url})
        }
        return url
    }, '')

    const newUrl = `${pathname}/${paramsUrl}`
    router.push(newUrl)
    setParamsUrl(paramsUrl)
}

const getInitParamsUrl = (paramValues: Record<string, string>) => {
    debugger
    return getEntries(paramValues).reduce((paramUrl, [name, value]) => {
        const paramValue = `${name}=${value}`
        paramUrl = addValueToUrl({ url: paramUrl, value: paramValue})
        return paramUrl
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
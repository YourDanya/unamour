import {useState} from 'react'
import {useMemo} from 'react'
import {MouseAction} from 'app/_common/types/types'
import {LayoutProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {useRouter} from 'next/navigation'
import {dictionary} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {useSearchParams} from 'next/navigation'
import {filterNames} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.content'
import {router} from 'next/client'
import {ReadonlyURLSearchParams} from 'next/navigation'
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context'
import {useRef} from 'react'
import {FilterValues} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import useDebounce from 'app/_common/hooks/helpers/debounce/debounce.hook'
import {usePathname} from 'next/navigation'
import {useEffect} from 'react'
import getEntries from 'app/_common/utils/typescript/get-entries/get-entries.util'
import {useParams} from 'next/navigation'
import {Locale} from 'app/_common/types/types'
import getKeys from 'app/_common/utils/typescript/get-keys/get-keys.utils'
import useResize from 'app/_common/hooks/helpers/resize/resize.hook'
import {useResponsive} from 'app/_common/hooks/helpers/responsive/responsive.hook'
import {createParams} from 'app/[locale]/shop-items/[category]/_components/_layout/create-params'
import {categories} from 'app/_common/content/categories/categories.content'
import {clothing} from 'app/_common/content/categories/categories.content'
import {clothingDictionary} from 'app/_common/content/categories/categories.content'
import {categoriesDictionary} from 'app/_common/content/categories/categories.content'

export const useLayout = () => {
    const params = useParams()
    const isItem = !!params.item

    return {isItem}
}

export const useShopItemsLayout = () => {
    const mainState = useMain()
    const mobileState = useMobile(mainState)
    const paramsState = useParamsState(mobileState)

    return {...paramsState}
}


const useMain = () => {
    const mainTransl = useLocale(dictionary)
    const clothingTransl = useLocale(clothingDictionary)
    const categoriesTransl = useLocale(categoriesDictionary)

    const locale = useParams().locale as Locale

    const [resize, setResize] = useState(false)

    const onDropdown = () => {
        setResize(true)
    }

    const params = useParams()

    const queryCategory = params.category as string

    let index = clothing.findIndex(category => category === queryCategory)
    let title: string

    if (index !== -1) {
        title = clothingTransl[index]
    } else {
        index = categories.findIndex(category => category === queryCategory)
        title = categoriesTransl[index]
    }

    const transl = {...mainTransl, title, clothing: clothingTransl}

    return {transl, locale, resize, setResize, onDropdown}
}

const useMobile = (state: ReturnType<typeof useMain>) => {
    let mobile: boolean | undefined

    const respState = useResponsive()
    
    if (respState && respState.breakpoint <= 992) {
        mobile = true
    } else if (respState) {
        mobile = false
    }

    const [modalActive, setModalActive] = useState(false)

    const onShowModal = () => {
        setModalActive(true)
    }

    const onHideModal = () => {
        setModalActive(false)
    }

    return {...state, mobile, modalActive, onShowModal, onHideModal}
}

const useParamsState = (mainState: ReturnType<typeof useMobile>) => {
    const state = useGetParamsState()
    const {paramValuesRef, paramsUrl, pathname} = state

    const createFilterDebounced = useDebounce( ({suspend}: {suspend?: boolean}) => {
        createParams({...state, suspend})
    })

    const doCreateParams = (state: {value?: string, name?: string, suspend?: boolean}) => {
        const {suspend} = state
        if (!suspend) {
            const {name, value} = state as {value: string, name: string}
            paramValuesRef.current[name] = value
        }

        createFilterDebounced({suspend})
    }

    return {...mainState, ...state, createParams: doCreateParams}
}

export const useGetParamsState = () => {
    const params = useSearchParams()
    const router = useRouter()

    const initParamsValues =  useMemo(() => {
        const paramsObj: Record<string, string> = {}

        params.forEach((value, key) => {
            paramsObj[key] = value
        })

        return paramsObj
    }, [])

    const paramValuesRef = useRef<Record<string, string>>(initParamsValues)

    const pathname = usePathname()
    const [paramsUrl, setParamsUrl] = useState(params.toString().replaceAll('%2C', ','))

    useEffect(() => {
        params.forEach((value, key) => {
            paramValuesRef.current[key] = value
        })
    }, [params])

    const onReset: MouseAction = () => {
        if (paramsUrl !== '') {
            router.push(pathname)
        }
    }

    return {params, router, paramValuesRef, pathname, paramsUrl, setParamsUrl, onReset}
}


import {ShopItemsProps} from "./shop-items.component"
import {useLocale} from "../../hooks/event-handler.hooks"
import shopItemsContent from "./shop-items.content"
import {useRouter} from "next/router"

const useShopItems = (props: ShopItemsProps) => {

    const [content, translation] = useLocale(shopItemsContent)
    const filters = Object.keys(content.filters)

    const router = useRouter()
    const query = router.query
    const path = router.asPath
    const pathArr = path.split('?')
    const mainPath = pathArr[0]
    const params = pathArr[1]

    const handleLinkClick = (event: any) => {
        const href = event.currentTarget.getAttribute('href')
        if (mainPath === href) event.preventDefault()
    }

    const handleFilter = (filter: string, state: string | Record<string, boolean>) => {

        const url = filters
            .map(elem => {
                let param = ''
                if (elem === filter) {
                    if (filter === 'sorting') {
                        if (state === null) param = ''
                        else param = `${filter}=${state}`
                    } else {
                        const objState = state as Record<string, boolean>
                        const value = Object.keys(state).filter(prop => objState[prop]).join(';')
                        param = value ? `${filter}=${value}` : ''
                    }
                } else if (elem in query) param = `${elem}=${query[elem]}`
                return param
            })
            .filter(elem => elem !== '')
            .join('&')
            .replace(/^/, (...args) => args[2] === '' ? `${mainPath}` : `${mainPath}?`)

        router.push(url)
    }

    const getState = (filter: string) => {
        const pathParam = query[filter] as string ?? ''
        if (filter === 'sorting') return pathParam
        else {
            const pathParamValues = pathParam.split(';').reduce((accum, paramValue) => {
                accum[paramValue] = true
                return accum
            }, {} as Record<string, boolean>) ?? {}
            const values = content.filters[filter as keyof typeof content.filters]
            const state = {} as Record<string, boolean>
            if (typeof values[0] === 'string') {
                const _values = values as string[]
                _values.forEach(elem => state[elem] = pathParamValues[elem] ?? false)
            } else {
                const _values = values as { param: string, code: string } []
                _values.forEach(elem => state[elem.param] = pathParamValues[elem.param] ?? false)
            }
            return state
        }
    }

    const reset = () => {
        router.push(`${mainPath}`)
    }


    return {content, translation, handleFilter, getState, mainPath, params, handleLinkClick, reset}
}

export default useShopItems
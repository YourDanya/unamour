import {ShopItemsProps} from "./shop-items.component"
import {useLocale} from "../../hooks/event-handler.hooks"
import shopItemsContent from "./shop-items.content"
import {useRouter} from "next/router"

const useShopItems = (props: ShopItemsProps) => {

    const [content, translation] = useLocale(shopItemsContent)
    const filters = Object.keys(content.filters)

    const router = useRouter()
    const query = router.query
    const url = router.basePath

    const handleFilter = (filter: string, state: string | Record<string, boolean>) => {

        const path = router.asPath.split('?')[0]

        const url = filters
            .map(elem => {
                let param = ''
                if (elem === filter) {
                    if (filter==='sorting') {
                        if (state===null) param = ''
                        else param = `${filter}=${state}`
                    }
                    else {
                        const objState = state as Record<string, boolean>
                        const value = Object.keys(state).filter(prop => objState[prop]).join(';')
                        param = value? `${filter}=${value}` : ''
                    }
                }
                else if (elem in query) param = `${elem}=${query[elem]}`
                return param
            })
            .filter(elem => elem!=='')
            .join('&')
            .replace(/^/, (...args) => args[2]==='' ? `${path}` : `${path}?`)

        if (url) router.push(url)
    }

    return {content, translation, handleFilter}
}

export default useShopItems
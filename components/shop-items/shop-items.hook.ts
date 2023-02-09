import {useState} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import {useRouter} from 'next/router'
import shopItemsContent from 'components/shop-items/shop-items.content'
import {ShopItemsProps} from 'components/shop-items/shop-items.types'
import {categoriesContent} from 'components/common/content/content'
import {colorContent} from 'components/common/content/content'
import {MouseAction} from 'types/types'
import {useMemo} from 'react'

const useShopItems = (props: ShopItemsProps) => {
    const [transl, content] = useLocale(shopItemsContent)
    const categories = useLocale(categoriesContent)
    const colors = useLocale(colorContent)
    const filters = useMemo(() => ['sorting', 'price', 'size', 'color'], [])

    const router = useRouter()
    const path = router.asPath
    const pathArr = path.split('?')
    const mainPath = pathArr[0]
    const params = pathArr[1]

    const [reset, setReset] = useState(false)

    const handleResetClick: MouseAction = () => {
        if (path!==mainPath) {
            router.push(`${mainPath}?reset`, mainPath)
        }
    }

    return {content, transl, params, handleResetClick, filters, reset, setReset, categories, colors}
}

export default useShopItems
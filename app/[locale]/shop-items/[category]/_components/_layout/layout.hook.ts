import {useState} from 'react'
import {useMemo} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {categoriesContent} from 'app/[locale]/_content/content'
import {colorContent} from 'app/[locale]/_content/content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {LayoutProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {useRouter} from 'next/navigation'
import layoutContent from 'app/[locale]/shop-items/[category]/_components/_layout/layout.content'

const useLayout = (props: LayoutProps) => {
    const [transl, content] = useLocale(layoutContent)
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

export default useLayout
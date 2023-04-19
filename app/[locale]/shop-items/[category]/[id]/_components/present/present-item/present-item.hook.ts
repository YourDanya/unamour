import presentItemContent from 'app/[locale]/shop-items/[category]/[id]/_components/present/present-item/present-item.content'
import {PresentItemProps} from 'app/[locale]/shop-items/[category]/[id]/_components/present/present-item/present-item.types'
import {colorContent} from 'app/[locale]/_content/content'
import {useGetParamForImages} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {Color} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'

const usePresentItem = (props: PresentItemProps) => {
    const [transl] = useLocale(presentItemContent)
    const {code} = colorContent.common.find(color => color.slug === props.color) as Color
    const {width, height, elemRef} = useGetParamForImages()
    return {transl, code, width, height, elemRef}
}

export default usePresentItem
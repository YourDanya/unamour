import {useLocale} from 'hooks/other/other.hooks'
import presentItemContent from 'components/shop-item/present/present-item/present-item.content'
import {colorContent} from 'components/common/content/content'
import {PresentItemProps} from 'components/shop-item/present/present-item/present-item.types'
import {Color} from 'components/shop-items/shop-items.types'
import {useGetParamForImages} from 'hooks/other/other.hooks'

const usePresentItem = (props: PresentItemProps) => {
    const [transl] = useLocale(presentItemContent)
    const {code} = colorContent.common.find(color => color.slug === props.color) as Color
    const {width, height, elemRef} = useGetParamForImages()
    return {transl, code, width, height, elemRef}
}

export default usePresentItem
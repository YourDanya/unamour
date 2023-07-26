import presentItemContent from 'app/[locale]/shop-items/[category]/[item]/_components/present/present-item/present-item.content'
import {PresentItemProps} from 'app/[locale]/shop-items/[category]/[item]/_components/present/present-item/present-item.types'
import {colorContent} from 'app/[locale]/_content/content'
import {useGetParamForImages} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'

const usePresentItem = (props: PresentItemProps) => {
    const [transl] = useLocale(presentItemContent)
    const {code} = colorContent.common.find(color => color.slug === props.color) as {slug: string, code: string}
    const {width, height, elemRef} = useGetParamForImages()
    return {transl, code, width, height, elemRef}
}

export default usePresentItem
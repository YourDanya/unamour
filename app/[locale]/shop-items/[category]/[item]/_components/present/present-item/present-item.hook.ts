import presentItemContent from 'app/[locale]/shop-items/[category]/[item]/_components/present/present-item/present-item.content'
import {PresentItemProps} from 'app/[locale]/shop-items/[category]/[item]/_components/present/present-item/present-item.types'
import {colorContent} from 'app/[locale]/_content/content'
import {useGetParamForImages} from 'app/[locale]/_common/hooks/other/other.hooks'
import useLocale from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.hook'
import {Color} from 'app/[locale]/_common/types/types'

const usePresentItem = (props: PresentItemProps) => {
    const [transl] = useLocale(presentItemContent)
    const {code} = colorContent.common.find(color => color.slug === props.color) as Color

    return {transl, code}
}

export default usePresentItem
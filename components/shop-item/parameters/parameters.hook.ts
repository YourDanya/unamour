import {useLocale} from 'hooks/other/other.hooks'
import parametersContent from 'components/shop-item/parameters/parameters.content'
import {ParametersProps} from 'components/shop-item/parameters/parameters.types'
import {colorContent} from 'components/common/content/content'
import {useMemo} from 'react'
import {Color} from 'components/shop-items/shop-items.types'

const useParameters = (props: ParametersProps) => {
    const {variants, color} = props
    const [transl] = useLocale(parametersContent)
    const colors = useLocale(colorContent)

    const colorCodes = useMemo(() => {
        return variants.filter((variant) => variant.color !== color).map((variant) => {
            return colors[1].find(({ slug}) => slug === variant.color) as Color
        })
    }, [color])

    const currentColor = useMemo(() => {
        const index = colors[1].findIndex(({slug}) => slug === color)
        return {code: colors[1][index].code, transl: colors[0][index]}
    }, [color])

    return {transl, colorCodes, currentColor}
}

export default useParameters
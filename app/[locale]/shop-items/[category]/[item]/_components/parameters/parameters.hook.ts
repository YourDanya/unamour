import {ParametersProps} from 'app/[locale]/shop-items/[category]/[item]/_components/parameters/parameters.types'
import parametersContent from 'app/[locale]/shop-items/[category]/[item]/_components/parameters/parameters.content'
import {useMemo} from 'react'
import {colorContent} from 'app/[locale]/_content/content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {Color} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'

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
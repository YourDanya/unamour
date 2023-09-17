import {ParametersProps} from 'app/[locale]/shop-items/[category]/[item]/_components/parameters/parameters.types'
import parametersContent from 'app/[locale]/shop-items/[category]/[item]/_components/parameters/parameters.content'
import {useMemo} from 'react'
import {Color} from 'app/_common/types/types'
import {colorValues} from 'app/_common/content/color/color.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {colorDictionary} from 'app/_common/content/color/color.content'

const useParameters = (props: ParametersProps) => {
    const {props: item, showModal, currentVariant, transl: itemTransl} = props
    const {name} = itemTransl
    const {variants} = item
    const {color} = currentVariant

    const transl = useLocale(parametersContent)

    const colorsTransl = useLocale(colorDictionary)

    const colorCodes = useMemo(() => {
        return variants.filter((variant) => variant.color !== color).map((variant) => {
            return colorValues.find(({ slug}) => slug === variant.color) as Color
        })
    }, [color])

    const currentColor = useMemo(() => {
        const index = colorValues.findIndex(({slug}) => slug === color)
        return {code: colorValues[index].code, transl: colorsTransl[index]}
    }, [color])

    const onShowModal = () => {
        showModal('size')
    }

    return {transl, colorCodes, currentColor, onShowModal, name}
}

export default useParameters
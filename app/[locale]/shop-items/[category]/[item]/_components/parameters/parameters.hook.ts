import {ParametersProps} from 'app/[locale]/shop-items/[category]/[item]/_components/parameters/parameters.types'
import parametersContent from 'app/[locale]/shop-items/[category]/[item]/_components/parameters/parameters.content'
import {useMemo} from 'react'
import {colorContent} from 'app/_common/content/content'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {Color} from 'app/_common/types/types'

const useParameters = (props: ParametersProps) => {
    const {props: item, showModal, currentVariant, transl: itemTransl} = props
    const {name} = itemTransl
    const {variants} = item
    const {color} = currentVariant

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

    const onShowModal = () => {
        showModal('size')
    }

    return {transl, colorCodes, currentColor, onShowModal, name}
}

export default useParameters
import {sizes as sizesList} from 'app/_common/content/size/size.content'
import {colorValues} from 'app/_common/content/color/color.content'
import {ColorsMap} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.types'
import {VariantState} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.types'

export const mapSizes = (state: VariantState) => {
    const {sizes} = state

    const sizeMap = sizes.reduce((sizeMap, size) => {
        sizeMap[size] = true
        return sizeMap
    }, {} as Record<string, boolean>)

    return sizesList.reduce((sizeObject, size) => {
        sizeObject[size] = sizeMap[size] ?? false
        return sizeObject
    }, {} as Record<string, boolean>)
}

export const mapColors = (state: VariantState) => {
    const {colorsTransl} = state

    return colorValues.reduce((colors, {slug, code}, index) => {
        colors.values.push(slug)
        colors.styles.push({backgroundColor: code})
        colors.labels.push(colorsTransl[index])
        return colors
    }, {
        styles: [], labels: [], values: []
    } as ColorsMap)
}
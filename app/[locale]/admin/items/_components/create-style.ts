import {FetchedItem} from 'app/_common/types/fetched-item'
import {CSSProperties} from 'react'
import {ItemPreviewStyles} from 'app/[locale]/admin/items/_components/admin-items.types'

export const createStyle = (pageItems: {item: FetchedItem, itemIndex: number}[]) => {

    const tableStyles: CSSProperties = {}
    const itemsStyles: ItemPreviewStyles[] = []

    let gridTemplateAreas = '"num name . category . image . actions" '

    for (let i = 0; i < pageItems.length; i++) {
        itemsStyles[i] = {
            num: {gridArea: `num-${i}`},
            name: {gridArea: `name-${i}`},
            category: {gridArea: `category-${i}`},
            image: {gridArea: `image-${i}`},
            actions: {gridArea: `actions-${i}`}
        }
        gridTemplateAreas += `"num-${i} name-${i} . category-${i} . image-${i} . actions-${i}" `
    }

    tableStyles.gridTemplateAreas = gridTemplateAreas

    return {tableStyles, itemsStyles}
}
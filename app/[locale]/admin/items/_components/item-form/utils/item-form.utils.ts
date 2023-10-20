// import {ItemImagesMap} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
// import {CreateItemImagesMap} from 'app/[locale]/admin/items/_components/item-form/utils/item-form.types'
// import {CreateItemImagesValues} from 'app/[locale]/admin/items/_components/item-form/utils/item-form.types'
//
// export const createItemImagesMap: CreateItemImagesMap = (params) => {
    // const {itemImagesValues, itemValue} = params
    //
    // return itemImagesValues.reduce((itemImagesMap, imagesValue, index) => {
    //     Object.entries(imagesValue).forEach(([imageId, {file}]) => {
    //         itemImagesMap[imageId] = {file, color: itemValue.variants[index].color}
    //     })
    //     return itemImagesMap
    // }, {} as ItemImagesMap)
// }
//
// export const createItemImagesValues: CreateItemImagesValues = ({itemValue}) => {
//     return itemValue.variants.map(({ images}) => {
//         const imagesObj = {} as Record<string, {file: File | null, url: string}>
//         images.forEach(({url, path}) => imagesObj[path] = {file: null, url})
//         return imagesObj
//     })
// }

export const stay = Infinity
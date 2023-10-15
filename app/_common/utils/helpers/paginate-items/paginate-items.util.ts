export const paginateItems = <T,> (params: {startIndex: number, endIndex: number, items: T[], all?: true}) => {
    const {startIndex, endIndex, items, all} = params

    const pageItems: {item: T, itemIndex: number}[] = []

    const length = endIndex - startIndex

    for (let i = startIndex ; i < endIndex; i++) {
        let item: T
        if (all) {
            item = items[0]
        } else {
            item = items[length - (endIndex - i)]
        }

        pageItems.push({item, itemIndex: i})
    }

    return {pageItems}
}

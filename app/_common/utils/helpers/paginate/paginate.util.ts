export const paginate = <T> (params: {items: T[], perPage: number, currentPage: number}) => {
    const {items, perPage, currentPage} = params
    const pageItems = []

    const startIndex = (currentPage - 1) * perPage
    const endIndex = Math.min( currentPage * perPage, items.length)

    for (let i = startIndex; i < endIndex; i++) {
        pageItems.push({item: items[i], itemIndex: i})
    }

    const pagesNumber = Math.ceil(items.length / perPage)

    return {pageItems, pagesNumber}
}
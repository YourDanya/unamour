export const createPaginationParams = (params: {totalCount: number, perPage: number, currentPage: number}) => {
    const {totalCount, perPage, currentPage} = params

    const startIndex = (currentPage - 1) * perPage
    const endIndex = Math.min( currentPage * perPage, totalCount)
    const pagesNumber = Math.ceil(totalCount / perPage)

    return {startIndex, endIndex, pagesNumber}
}


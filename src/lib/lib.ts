export const pagination = <T>(array: T[], currentPage: number = 1, pageSize: number = 5) => {
    const startIndex = (currentPage * pageSize) - pageSize
    const lastIndex = currentPage * pageSize - 1
    const currentArray = array.slice(startIndex, lastIndex)
    const pagesCount = Math.ceil(array.length / pageSize)
    return {currentArray, pagesCount}
}

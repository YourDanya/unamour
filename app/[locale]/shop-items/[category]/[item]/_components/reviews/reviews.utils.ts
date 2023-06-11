export const getStarsArr = (rating: number) => {
    const arr = []
    for (let i = 0 ; i < 5; i++) {
        const res = rating - i
        if (res > 1) {
            arr.push(1)
        }
        else if (res >= 0) {
            arr.push(res)
        }
        else {
            arr.push(0)
        }
    }
    return arr
}
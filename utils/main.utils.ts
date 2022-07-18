export const sleep= (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const removeFromArr = (arr: any[], value: any) => {
    const index = arr.indexOf(value)
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr
}


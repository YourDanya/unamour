export const sleep= (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const a = 10
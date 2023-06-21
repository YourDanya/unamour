const foo1 = (callback) => {
    callback()
}

const arr = []

foo1(() => {
    arr.push(1)
})

console.log('arr', arr)
const checkEqual = (obj1, obj2) => {
    let stack1 = [{obj: obj1}], newStack1 = [], stack2 = [{obj: obj2}], newStack2 = []
    while (stack1.length !== 0) {
        newStack1 = []
        newStack2 = []
        for (let i = 0; i < stack1.length; i++) {
            if (Object.keys(stack1[i]).length !== Object.keys(stack2[i]).length) {
                return false
            }
            for (let key in stack1[i]) {
                if (typeof stack1[i][key] === 'object' && typeof stack2[i][key] === 'object' &&
                  stack1[i][key] !== null && stack2[i][key] !== null) {
                    newStack1.push(stack1[i][key])
                    newStack2.push(stack2[i][key])
                }
                else if (typeof stack1[i][key] !== typeof stack2[i][key] || stack1[i][key] !== stack2[i][key]) {
                    return false
                }
            }
        }
        stack1 = newStack1
        stack2 = newStack2
    }
    return true
}

const res = checkEqual(undefined, null)

console.log('res', res)
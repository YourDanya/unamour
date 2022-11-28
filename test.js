const a = {b: {c: 10}}

const f = (obj) => {
    obj.c = 100
}

f(a.b)

console.log('c', a.b.c)
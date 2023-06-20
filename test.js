const time = performance.now()

const test = {
    1: {foo: () => {console.log('1')}},
    2: {foo: () => {console.log('1')}},
    3: {foo: () => {console.log('1')}},
    4: {foo: () => {console.log('1')}},
    5: {foo: () => {console.log('1')}},
    6: {foo: () => {console.log('1')}},
    7: {foo: () => {console.log('1')}},
    8: {foo: () => {console.log('1')}},
    9: {foo: () => {console.log('1')}},
    10: {foo: () => {console.log('1')}},
    11: {foo: () => {console.log('1')}},
    12: {foo: () => {console.log('1')}},
    13: {foo: () => {console.log('1')}},
    14: {foo: () => {console.log('1')}},
    15: {foo: () => {console.log('1')}},
    16: {foo: () => {console.log('1')}},
    17: {foo: () => {console.log('1')}},
    18: {foo: () => {console.log('1')}},
    19: {foo: () => {console.log('1')}},
    20: {foo: () => {console.log('1')}},
    21: {foo: () => {console.log('1')}},
    22: {foo: () => {console.log('1')}},
    23: {foo: () => {console.log('1')}},
    24: {foo: () => {console.log('1')}},
    25: {foo: () => {console.log('1')}},
    26: {foo: () => {console.log('1')}},
    27: {foo: () => {console.log('1')}},
    28: {foo: () => {console.log('1')}},
    29: {foo: () => {console.log('1')}},
    30: {foo: () => {console.log('1')}}
}

let test2 = {...test}
test2 = {...test}
test2 = {...test}
test2 = {...test}
test2 = {...test}

console.log('time', performance.now() - time)
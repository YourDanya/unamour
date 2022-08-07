//
// const nameMap = {}
//
// arr.forEach(({name, color}) => {
//     if (nameMap[name]) {
//         nameMap[name] = [...nameMap[name], color]
//     } else {
//         nameMap[name] = [color]
//     }
// })
//
// let newArr = arr.map(({name}) => {
//     return {name, colors: nameMap[name]}
// })
//
//
// let inputs = {
//     email:{
//         value: 'email',
//         validate: 'required',
//         error: ''
//     },
//     number:{
//         value: 'number',
//         validate: 'required',
//         error: ''
//     },
//     name:{
//         value: 'name',
//         validate: 'required',
//         error: ''
//     }
// }
//
// const mergeObjects = (obj1, obj2) => {
//     const newObj = {}
//     for (let prop in obj1) {
//         if (prop in obj2) {
//             if (Array.isArray(obj1[prop]) && Array.isArray(obj2[prop])) {
//                 newObj[prop] = []
//                 obj1[prop].forEach((elem, index) => {
//                     newObj[prop].push({...elem, ...obj2[prop][index]})
//                 })
//             }
//             else {
//                 newObj[prop] = {...obj1[prop], ...obj2[prop]}
//             }
//         } else {
//             newObj[prop] = {...obj1[prop]}
//         }
//     }
//     for (let prop in obj2) {
//         if (!(prop in obj1)) {
//             newObj[prop] = {...obj2[prop]}
//         }
//     }
//     return newObj
// }
//
//
// const first = {
//     a: {
//         dhjd: '',
//         fjkje: '',
//     },
//     c: {
//         ddd: ''
//     },
//     arr: [
//         {a: 1},
//         {b: 2},
//     ]
// }
//
// const second = {
//     a: {
//         duir: '',
//         jisf: ''
//     },
//     b: {
//         ffff: ''
//     },
//     arr: [
//         {aa: 23},
//         {ccf: 44}
//     ]
// }
//
// console.log(mergeObjects(first, second))

const test = 1.7 % 0.6

console.log(test)

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

// function map (callback) {
//     const arr = []
//     for (let i=0; i<this.length; i++) {
//         arr[i]= callback(this[i], i)
//     }
//     return arr
// }
//
// function filter (callback) {
//     const arr = []
//
//     for (let i=0; i<this.length; i++) {
//         const elem = this[i]
//         if (callback(elem)) arr.push(elem)
//     }
//     return arr
// }
//
// function reduce (callback, initValue) {
//     let accum = initValue?? this[0]
//     const start = initValue === undefined? 1 : 0
//     for (let i = start; i<this.length; i++) {
//         accum = callback(accum, this[i])
//     }
//     return accum
// }

// Array.prototype.myFilter = filter
//
// const res = [1, 2, 3, 4, 5].myFilter((elem) => elem>2)
//
// Array.prototype.myReduce = reduce
// //
// //
// // no init value
// console.log([1, 2, 3].myReduce((sum, curr) => sum + curr))
//
// // init value:
// console.log([1, 2, 3].myReduce((sum, curr) => sum + curr, 1000))

// const obj = {a: 1}
//
// console.log(obj.__proto__)

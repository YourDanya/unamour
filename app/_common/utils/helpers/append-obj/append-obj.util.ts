export const appendObj = <Obj1T extends object, Obj2T extends object> (obj1: Obj1T, obj2: Obj2T) => {
    const obj3 = obj1 as Obj1T & Obj2T
    let prop: keyof (Obj2T)

    for (prop in obj2) {
        (obj3[prop] as typeof obj2[ typeof prop]) = obj2[prop]
    }

    return obj3
}

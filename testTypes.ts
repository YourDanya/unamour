import {Merged} from "./redux/shop-items/shop-items.types";

type Test1 = {
    a: {
        test1: ''
    }
    b: ''
}

type Test2 = {
    a: {
        test2: ''
    },
    c: ''
}

type Test3 = Merged<Test1, Test2>

const test: Test3 = {c: '', b: '', a: {test1: '', test2: ''}}

const testObj = {
    a: {
        a: ''
    }
}
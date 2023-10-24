class Model {
    value = ''

    onChange () {
        this.value = 'a'
    }
}

const model = new Model()

model.onChange()

console.log(model.value)
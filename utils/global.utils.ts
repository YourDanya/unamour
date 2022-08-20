const globalObject: Record<string, any> = {

}

const global: Record<string, any> = {
    set: function (key: string, value: any, timer?: number) {
        this[key] = value
        if (timer){
            setTimeout(() => {
                this[key] = null
            }, timer)
        }
        return value
    },
    get: function (key: string) {
        return this[key]
    }
}

export default global
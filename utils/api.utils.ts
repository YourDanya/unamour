import axios from "axios";

let baseURL = 'http://localhost:5000'

let instance = axios.create({
    baseURL,
    withCredentials: true
})

const handleApiResponse = async (apiCall: Function) => {
    try {
        const res = await apiCall()
        return res
    } catch (err: any) {
        return err
    }
}

export const Api = {
    get:
        async (url: string) => {
            return await instance.get(url)
        },
    post:
        async (url: string, options: object) => {
            return await instance.post(url, options)
        },
    put:
        async (url: string, options: object) => {
            return await instance.put(url, options)
        },
    patch:
        async (url: string, options: string) => {
            return await  instance.patch(url, options)
        },
    delete:
        async (url: string, options: string) => {
            return await handleApiResponse(() => instance.delete(url))
        }
}
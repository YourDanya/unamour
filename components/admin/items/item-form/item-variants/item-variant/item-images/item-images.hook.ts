import {useRef} from 'react'
import {useState} from 'react'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'
import {MouseAction} from 'types/types'
import {ChangeEvent} from 'react'

const useItemImages = () => {

    const modeRef = useRef({type: '', id: ''})

    // const [images, setImages] = useState<{id: string, value:string | File}[]>(
    //     props.images.map((imageId) => ({id: imageId, value: imageId}))
    // )
    //
    // useOmitFirstEffect(() => {
    //     const images = props.images.map((imageId) => ({id: imageId, value: imageId}))
    //     setImages([...images])
    // }, [props.images])
    //
    // const btnRef = useRef<HTMLInputElement>(null)
    //
    // const onUpdateImage = (id: string) => {
    //     modeRef.current = {type: 'update', id}
    //     btnRef?.current?.click()
    // }
    //
    // const onDeleteImage = (id: string) => {
    //     delete imageValues.current[id]
    //     const index = images.findIndex((image) => image.id === id)
    //     images.splice(index, 1)
    //     setImages([...images])
    // }
    //
    // const onAddImage: MouseAction = (event) => {
    //     event.preventDefault()
    //     modeRef.current = {type: 'create', id: ''}
    //     btnRef?.current?.click()
    // }
    //
    // const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
    //     console.log('selecting')
    //
    //     const file = event.target.files?.[0]
    //     if (!file) {
    //         return
    //     }
    //     let {type, id} = modeRef.current
    //
    //     if (type === 'create') {
    //         // console.log('creating')
    //         id = new Date().toString()
    //         images.push({id, value: file})
    //         imageValues.current[id] = {color, file}
    //     } else {
    //         // console.log('updating')
    //         imageValues.current[`${id}`].file = file
    //         const index = images.findIndex((image) => image.id === id)
    //         images[index].value = file
    //         imageValues.current[id].file = file
    //     }
    //     modeRef.current = {type: '', id: ''}
    //
    //     setImages([...images])
    // }
    //
    // useOmitFirstEffect(() => {
    //     images.forEach((image) => {
    //         imageValues.current[image.id].color = inputs.values.color
    //     })
    // }, [inputs.values.color])
}

export default useItemImages
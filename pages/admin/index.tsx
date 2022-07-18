import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectClientItems, ShopItemObject} from "../../redux/shop-items/shop-items.slice";
import {fetchItems} from "../../redux/shop-items/shop-items.thunk";

type adminProps = {}

type adminItem = {
    item: ShopItemObject,
}

const AdminItem: React.FC<adminItem> = ({item}) => {

    // for (let prop in item) {
    //     if (typeof item[prop as keyof typeof item] === 'string') {
    //
    //     } else {
    //
    //     }
    // }

    //     name: string,
    //     category: string,
    //     slug: string,
    //     slugCategory: string,
    //     price: number,
    //     oldPrice: number,
    //     images: [string],
    //     sizes: [string],
    //     color: string,
    //     otherColors: [{code: string, ref: string, name: string}],
    //     isAvailable: boolean,
    //     description: string,
    //     composition: string,
    //     parameters: string,
    //     delivery: string

    const ua = item.ua
    const eng = item.eng
    const ru = item.ru

    const [state, setState] = useState({

        nameUa: ua.name,
        nameEng: eng.name,
        nameRu: ru.name,

        categoryUa: ua.category,
        categoryEng: eng.category,
        categoryRu: ru.category,

        slugUa: ua.slug,
        slugEng: eng.slug,
        slugRu: ru.slug,

        slugCategoryUa: ua.slugCategory,
        slugCategoryEng: eng.slugCategory,
        slugCategoryRu: ru.slugCategory,

        priceUa: ua.price,
        priceEng: eng.price,
        priceRu: ru.price,

        oldPriceUa: ua.oldPrice,
        oldPriceEng: eng.oldPrice,
        oldPriceRu: ru.oldPrice,

        imagesUa: ua.images,
        imagesEng: eng.images,
        imagesRu: ru.images,

        sizesUa: ua.sizes,
        sizesEng: eng.sizes,
        sizesRu: ru.sizes,

        colorUa: ua.color,
        colorEng: eng.color,
        colorRu: ru.color,

        otherColorsUa: ua.otherColors,
        otherColorsEng: eng.otherColors,
        otherColorsRu: ru.otherColors,

        isAvailableUa: ua.isAvailable,
        isAvailableEng: eng.isAvailable,
        isAvailableRu: ru.isAvailable,

        descriptionUa: ua.description,
        descriptionEng: eng.description,
        descriptionRu: ru.description,

        compositionUa: ua.composition,
        compositionEng: eng.composition,
        compositionRu: ru.composition,

        parametersUa: ua.parameters,
        parametersEng: eng.parameters,
        parametersRu: ru.parameters,

        deliveryUa: ua.delivery,
        deliveryEng: eng.delivery,
        deliveryRu: ru.delivery
    })

    const handleChange = () => {

    }

    const [color, setColor] = useState()

    return (
        <div className={'admin__item'}>
            /////////////////name///////////////////////////
            <div className="admin__item-prop">
                <div className={'admin__input-block'}>
                    ua
                    <input name={'nameUa'} placeholder={'nameUa'} value={state.nameUa} onChange={handleChange} className={'admin__input'}/>
                </div>
                <div className={'admin__input-block'}>
                    eng
                    <input name={'nameEng'} placeholder={'nameEng'} value={state.nameEng} onChange={handleChange} className={'admin__input'}/>
                </div>
                <div className={'admin__input-block'}>
                    ru
                    <input name={'nameRu'} placeholder={'nameRu'} value = {state.nameRu} onChange={handleChange} className={'admin__input'}/>
                </div>
            </div>

            //////////////////////category//////////////////
            <div className="admin__item-prop">
                <div className={'admin__input-block'}>
                    ua
                    <input name={'categoryUa'} placeholder={'categoryUa'} value={state.categoryUa} onChange={handleChange} className={'admin__input'}/>
                </div>
                <div className={'admin__input-block'}>
                    eng
                    <input name={'categoryEng'} placeholder={'categoryEng'} value={state.categoryEng} onChange={handleChange} className={'admin__input'}/>
                </div>
                <div className={'admin__input-block'}>
                    ru
                    <input name={'categoryRu'} placeholder={'categoryRu'} value = {state.categoryRu} onChange={handleChange} className={'admin__input'}/>
                </div>
            </div>

            /////////////////////////slug///////////////////
            <div className="admin__item-prop">
                <div className={'admin__input-block'}>
                    ua
                    <input name={'slugUa'} placeholder={'slugUa'} value={state.slugUa} onChange={handleChange} className={'admin__input'}/>
                </div>
                <div className={'admin__input-block'}>
                    eng
                    <input name={'slugEng'} placeholder={'slugEng'} value={state.slugEng} onChange={handleChange} className={'admin__input'}/>
                </div>
                <div className={'admin__input-block'}>
                    ru
                    <input name={'slugRu'} placeholder={'slugRu'} value = {state.slugRu} onChange={handleChange} className={'admin__input'}/>
                </div>
            </div>

            ///////////////////////////slugCategory/////////
            <div className="admin__item-prop">
                <div className={'admin__input-block'}>
                    ua
                    <input name={'slugCategoryUa'} placeholder={'slugCategoryUa'} value={state.slugCategoryUa} onChange={handleChange} className={'admin__input'}/>
                </div>
                <div className={'admin__input-block'}>
                    eng
                    <input name={'slugCategoryEng'} placeholder={'slugCategoryEng'} value={state.slugCategoryEng} onChange={handleChange} className={'admin__input'}/>
                </div>
                <div className={'admin__input-block'}>
                    ru
                    <input name={'slugCategoryRu'} placeholder={'slugCategoryRu'} value = {state.slugCategoryRu} onChange={handleChange} className={'admin__input'}/>
                </div>
            </div>

            ///////////////////////price///////////////////////
            <div className="admin__item-prop">
                <div className={'admin__input-block'}>
                    ua
                    <input name={'priceUa'} placeholder={'priceUa'} value={state.priceUa} onChange={handleChange} className={'admin__input'}/>
                </div>
                <div className={'admin__input-block'}>
                    eng
                    <input name={'priceEng'} placeholder={'priceEng'} value={state.priceEng} onChange={handleChange} className={'admin__input'}/>
                </div>
                <div className={'admin__input-block'}>
                    ru
                    <input name={'priceRu'} placeholder={'priceRu'} value = {state.priceRu} onChange={handleChange} className={'admin__input'}/>
                </div>
            </div>

            ////////////////////////////////oldPrice////////////
            <div className="admin__item-prop">
                <div className={'admin__input-block'}>
                    ua
                    <input name={'oldPriceUa'} placeholder={'oldPriceUa'} value={state.oldPriceUa} onChange={handleChange} className={'admin__input'}/>
                </div>
                <div className={'admin__input-block'}>
                    eng
                    <input name={'oldPriceEng'} placeholder={'oldPriceEng'} value={state.oldPriceEng} onChange={handleChange} className={'admin__input'}/>
                </div>
                <div className={'admin__input-block'}>
                    ru
                    <input name={'oldPriceRu'} placeholder={'oldPriceRu'} value = {state.oldPriceRu} onChange={handleChange} className={'admin__input'}/>
                </div>
            </div>

            /////////////////////images//////////
            <div className="admin__item-prop">
                {/*<div className={'admin__input-block'}>*/}
                {/*    ua <Input name={'categoryUa'} placeholder={'Категорія укр'}/>*/}
                {/*</div>*/}
                {/*<div className={'admin__input-block'}>*/}
                {/*    eng <Input name={'categoryEng'} placeholder={'Категорія анг'}/>*/}
                {/*</div>*/}
                {/*<div className={'admin__input-block'}>*/}
                {/*    ru <Input name={'categoryUa'} placeholder={'Категорія рос'}/>*/}
                {/*</div>*/}
                <button className={''}>
                    Додати поля для введення
                </button>
            </div>

            /////////////////sizes///////////////
            <div className="admin__item-prop">

            </div>

            //////////////////color//////////////
            <div className="admin__item-prop">

            </div>

            //////////////////otherColors////////
            <div className="admin__item-prop">

            </div>

            ///////////////////isAvailable////////
            <div className="admin__item-prop">

            </div>

            ////////////////description///////////
            <div className="admin__item-prop">
                <div className={'admin__input-block'}>
                    ua
                    <textarea name={'descriptionUa'} placeholder={'descriptionUa'} value={state.descriptionUa} onChange={handleChange} className={'admin__textarea'}/>
                </div>
                <div className={'admin__input-block'}>
                    eng
                    <textarea name={'descriptionEng'} placeholder={'descriptionEng'} value={state.descriptionEng} onChange={handleChange} className={'admin__textarea'}/>
                </div>
                <div className={'admin__input-block'}>
                    ru
                    <textarea name={'descriptionRu'} placeholder={'descriptionRu'} value = {state.descriptionRu} onChange={handleChange} className={'admin__textarea'}/>
                </div>
            </div>

            //////////////////composition/////////
            <div className="admin__item-prop">
                <div className={'admin__input-block'}>
                    ua
                    <textarea name={'compositionUa'} placeholder={'compositionUa'} value={state.compositionUa} onChange={handleChange} className={'admin__textarea'}/>
                </div>
                <div className={'admin__input-block'}>
                    eng
                    <textarea name={'compositionEng'} placeholder={'compositionEng'} value={state.compositionEng} onChange={handleChange} className={'admin__textarea'}/>
                </div>
                <div className={'admin__input-block'}>
                    ru
                    <textarea name={'compositionRu'} placeholder={'compositionRu'} value = {state.compositionRu} onChange={handleChange} className={'admin__textarea'}/>
                </div>
            </div>

            //////////////////parameters/////////
            <div className="admin__item-prop">
                <div className={'admin__input-block'}>
                    ua
                    <textarea name={'parametersUa'} placeholder={'parametersUa'} value={state.parametersUa} onChange={handleChange} className={'admin__textarea'}/>
                </div>
                <div className={'admin__input-block'}>
                    eng
                    <textarea name={'parametersEng'} placeholder={'parametersEng'} value={state.parametersEng} onChange={handleChange} className={'admin__textarea'}/>
                </div>
                <div className={'admin__input-block'}>
                    ru
                    <textarea name={'parametersRu'} placeholder={'parametersRu'} value = {state.parametersRu} onChange={handleChange} className={'admin__textarea'}/>
                </div>
            </div>

            //////////////////delivery//////////
            <div className="admin__item-prop">
                <div className={'admin__input-block'}>
                    ua
                    <textarea name={'deliveryUa'} placeholder={'deliveryUa'} value={state.deliveryUa} onChange={handleChange} className={'admin__textarea'}/>
                </div>
                <div className={'admin__input-block'}>
                    eng
                    <textarea name={'deliveryEng'} placeholder={'deliveryEng'} value={state.deliveryEng} onChange={handleChange} className={'admin__textarea'}/>
                </div>
                <div className={'admin__input-block'}>
                    ru
                    <textarea name={'deliveryRu'} placeholder={'deliveryRu'} value = {state.deliveryRu} onChange={handleChange} className={'admin__textarea'}/>
                </div>
            </div>
            
            <button>
                Submit
            </button>
        </div>
    )
}

const Admin: React.FC<adminProps> = () => {
    // const fetchedItems: ShopItemObject[] = useSelector(selectClientItems)
    const [items, setItems] = useState<ShopItemObject[] | null>(null)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     if (fetchedItems.length > 0) setItems(fetchedItems)
    // }, [fetchedItems])
    //
    // dispatch(fetchItems)

    return (<>
        {
            items ?
                <div className={'admin'}>
                    <div className={'admin__title'}>
                        Вітаємо вас у панелі адміна!
                    </div>
                    <div className={'shop-items'}>
                        {
                            items.map((item) => {

                            })
                        }
                    </div>
                    <button className={'admin__add'}>Додати товар</button>
                </div> :
                <div>
                    Чекайте, йде завантаженя..
                </div>
        }
    </>)
}

export default Admin
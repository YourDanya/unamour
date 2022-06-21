import React, {useState} from 'react'
import Link from "next/link";

interface favoritesProps {

}

const Index: React.FC<favoritesProps> = () => {
    const [favoriteItems, setFavoriteItems] = useState(null)
    return (
        <div className={'favorites'}>
            <div className={'favorites__title'}>
                ОБРАНЕ
            </div>
            {
                favoriteItems ? (
                    <div className={'favorites__items'}>

                    </div>
                ) : (
                    <div className={'favorites__empty'}>
                        <div className="favorites__empty-title">
                            ТУТ БУДУТЬ ЗІБРАНІ ТОВАРИ, <br/>
                            ЯКІ ВИ ДОДАТЕ У ВІШЛИСТ
                        </div>
                        <Link href={'/shop-items/all'}>
                            <a className={'favorites__empty-button'}>
                                ПЕРЕЙТИ В КАТАЛОГ
                            </a>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Index
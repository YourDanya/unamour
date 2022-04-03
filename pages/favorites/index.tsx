import React from 'react'

interface favoritesProps {

}

const Index: React.FC<favoritesProps> = () => {
    const [favoriteItems, setFavoriteItems] =
    return (
        <div className={'favorites'}>
            {
                favoriteItems ? (
                    <div className={'favorites__items'}>

                    </div>
                ) : (
                    <div className={'favorites__empty'}>
                        <div className="favorites__empty-title">
                            ЗДЕСЬ БУДУТ СОБРАНЫ ТОВАРЫ, <br/>
                            КОТОРЫЕ ВЫ ДОБАВИТЕ В ВИШЛИСТ
                        </div>
                        <button className={'favorites__empty-title'}>
                            Перейти в каталог
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Index
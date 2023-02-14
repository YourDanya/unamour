import React, {useEffect, useState} from 'react'
import search from 'public/icons/search.svg'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {Locale} from 'types/types'
import ShopItemPreview from 'components/shop-item-preview/shop-item-preview.component'
import {ClientItem} from 'redux/shop-items/shop-items.types'
import {NextPage} from 'next'
import Input from 'components/common/input/input.component'

const Search: NextPage = () => {

    return (
        <div className={'search-page'}>
            {/*<div className="search-page__top">*/}
            {/*    <div className='search-page__title'>РЕЗУЛЬТАТИ ПОШУКУ</div>*/}
            {/*    <div className='search-page__input'>*/}
            {/*        <Input*/}
            {/*            placeholder={'Знайти'}*/}
            {/*            value={input}*/}
            {/*            name={'search'}*/}
            {/*            onChange={onChange}*/}
            {/*        />*/}
            {/*        <img className={'search__icon'} src={search.src} alt={'search icon'}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className='search-page__results'>*/}
            {/*    {searchItems.map((item, index) =>*/}
            {/*        <div className="search-page__item" key={item.slug + 1}>*/}
            {/*            <ShopItemPreview {...item}/>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    )
}

export default Search
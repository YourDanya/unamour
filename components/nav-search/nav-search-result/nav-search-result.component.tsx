import React from 'react'

export interface NavSearchResultProps {
    name: string,
    imgUrl: string
}

const NavSearchResult: React.FC<NavSearchResultProps> = () => {
    return (
        <div className={'nav-search-result'}>
            {/*<img src="" alt="" className="nav-search-result__img"/>*/}
            <div className={'nav-search-result__text'}>
                item-name
            </div>
        </div>
    )
}

export default NavSearchResult
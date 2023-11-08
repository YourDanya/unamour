'use client'

import type {NextPage} from 'next'
import Link from 'next/link'
import allLinkImg from 'public/images/home/bg.jpg'
import bestLinkImg from 'public/images/home/best-link.jpg'
import logo from 'public/logo/unamour-white.jpg'
import Image from 'next/image'
import useHome from 'app/[locale]/_components/home.hook'
import LoadImage from 'app/_common/components/load-image/load-image.component'

const Home: NextPage = () => {
    const {allLinkRef, allLinkHeight} = useHome()

    return (
        <div className="home" ref={allLinkRef}>
            <Link href={'/shop-items/all'} className={'home__all-link'}>
                <LoadImage
                    className={'home__all-link-img'}
                    height={allLinkHeight}
                    alt={'home bg'}
                    src={allLinkImg.src}
                />
            </Link>
        </div>
    )
}

export default Home

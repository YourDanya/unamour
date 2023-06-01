'use client'

import type {NextPage} from 'next'
import Link from 'next/link'
import allLinkImg from 'public/images/home/bg.jpg'
import bestLinkImg from 'public/images/home/best-link.jpg'
import logo from 'public/logo/unamour-white.jpg'
import Image from 'next/image'
import useHome from 'app/[locale]/_components/home.hook'
import LoadImage from 'app/[locale]/_common/components/load-image-v2/load-image.component'

const Home: NextPage = () => {
    const {allLinkRef, containerRef, bestLinkHeight, logoHeight, allLinkHeight} = useHome()

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
            <div className={'home__bottom'} ref={containerRef}>
                <LoadImage
                    height={logoHeight}
                    className={'home__logo'}
                    alt={'logo img'}
                    src={logo.src}
                    quality={100}
                />
                <Link href={'/shop-items/best'} className={'home__best'}>
                    <LoadImage
                        height={bestLinkHeight}
                        style={{objectFit: 'cover'}}
                        alt={'best link img'}
                        src={bestLinkImg.src}
                        quality={100}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Home

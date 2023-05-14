'use client'

import type {NextPage} from 'next'
import Link from 'next/link'
import allLinkImg from 'public/images/home/bg.jpg'
import bestLinkImg from 'public/images/home/best-link.jpg'
import logo from 'public/logo/unamour-white.jpg'
import Image from 'next/image'
import useHome from 'app/[locale]/_components/home.hook'

const Home: NextPage = () => {
    const {allLinkRef, allLinkWidth, containerRef, bestLinkWidth, logoWidth, allLinkHeight} = useHome()

    return (
        <div className='home' ref={allLinkRef}>
            <Link href={'/shop-items/all'} className={'home__all-link'}>
                <Image
                    className={'home__all-link-img'}
                    height={allLinkHeight}
                    width={allLinkWidth}
                    alt={'home bg'}
                    src={allLinkImg.src}
                    quality={100}
                />
            </Link>
            <div className={'home__bottom'} ref={containerRef}>
                <div className={'home__logo-wrapper'}>
                    <Image
                        height={logoWidth}
                        width={logoWidth}
                        className={'home__logo'}
                        alt={'logo img'}
                        src={logo.src}
                        quality={100}
                    />
                </div>
                <Link href={'/shop-items/best'} className={'home__best-link'}>
                    <Image
                        height={bestLinkWidth * 4 / 3}
                        width={bestLinkWidth}
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

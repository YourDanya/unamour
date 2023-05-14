'use client'
import React from 'react'
import usePrivacy from 'app/[locale]/client-service/privacy/_components/privacy.hook'

const Privacy = () => {
    const {children} = usePrivacy()

    return (
        <div className={'privacy'}>
            {children}
        </div>
    )
}

export default Privacy
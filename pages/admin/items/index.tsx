import React from "react"
import {NextPage} from 'next'
import useAdmin from 'pages/admin/items/admin-items.hook'

const Admin: NextPage = () => {
    const {items} = useAdmin()

    return (
        <div className={'admin-items'}>
        </div>
    )
}

export default Admin
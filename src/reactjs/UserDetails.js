import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const { userid } = useParams()
    console.log(userid)
    
    return (
        <div>UserDetails</div>
    )
}

export default UserDetails
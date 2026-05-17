import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams();
    return (
        <div className='flex justify-center items-center mt-10 bg-gray-400 py-4'>User: {userid}</div>
    )
}

export default User
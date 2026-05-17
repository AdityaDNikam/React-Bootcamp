import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AdityaDNikam')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data);
    //         })
    // }, []);
    return (
        <>
            <div className='flex justify-center items-center mt-10 bg-gray-400 py-4'>Github: {data.followers} </div>
            <img src={data.avatar_url} alt="Image" className='flex justify-center items-center mt-10 w-48 h-48 rounded-full' />
        </>
    )
}

export default Github

export const getGithubInfo = async () => {
    const response = await fetch('https://api.github.com/users/AdityaDNikam')
    return response.json()
}
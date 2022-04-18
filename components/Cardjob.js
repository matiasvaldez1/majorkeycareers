import React from 'react'
import Link from 'next/link'

export default function Cardjob({type,description,title,isOpen,isClosed,category,id}) {
    const descrip = description.replace(/<\/?[^>]+>/gi, '')
    return (
        <div className='bg-gray-100 my-12 text-center select-none space-y-3 rounded-md hover:bg-gray-100/50'>
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className='text-sm'>{category}</p>
            <p>{type}</p>
            <p className='w-10/12 m-auto'>{descrip.slice(0,100)}-</p>
            <div className='flex justify-center'>
                <a className='text-tertiary font-medium hover:opacity-60 cursor-pointer' href={`https://tradehelm.com/wp-content/plugins/bullhorn-oscp/#/jobs/${id}`} target="_blank" rel="noreferrer" >
                View detail
                </a>
            </div>
        </div>
    )
}

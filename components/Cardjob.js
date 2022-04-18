import React,{useState} from 'react'
import Link from 'next/link'
import ModalCard from './ModalCard'

export default function Cardjob({type,description,title,isOpen,isClosed,category,id}) {
    const descrip = description.replace(/<\/?[^>]+>/gi, '')
    const [showModal,setShowModal] = useState(false)
    return (
        <>
        {showModal ? <ModalCard 
        setShowModal={setShowModal}
        description={descrip}
        title={title}
        category={category}
        id={id}
        type={type}
        /> : null}
        <div className='bg-gray-100 my-12 text-center select-none space-y-3 rounded-md hover:bg-gray-100/50'>
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className='text-sm'>{category}</p>
            <p>{type}</p>
            <p className='w-10/12 m-auto'>{descrip.slice(0,100)}-</p>
            <div className='flex justify-center'>
                <button onClick={() => setShowModal(!showModal)} className='text-tertiary font-medium hover:opacity-60 cursor-pointer' >
                View detail
                </button>
            </div>
        </div>
        </>
    )
}

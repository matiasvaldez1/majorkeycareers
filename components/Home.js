import React,{useState,useEffect} from 'react'
import Cardjob from './Cardjob'
import ReactPaginate from 'react-paginate';
import {useRouter} from 'next/router'

export default function Home({jobs}) {
    const [items,setItems] = useState(jobs)
    const itemsPerPage = 12;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [categories,setCategories] = useState(null)
    const [input,setInput] = useState()
    const router = useRouter()
    
    const handleInputChange = (e) =>{
        setInput(e.target.value)
    }

    const handleInputSubmit = (e) =>{
        e.preventDefault()
        if(input === "") setItems(jobs)
        const filtered = items.filter(e =>{
            const title= e.title.toLowerCase()
            const valueLowerCase= input.toLowerCase()
            return title.includes(valueLowerCase)
        })
        setItems(filtered)
        setInput("")
    }

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
        }, [itemOffset, itemsPerPage,items]);
    
    useEffect(() => {
        const mapItems = items.map(e => e.publishedCategory.name)
        setCategories([ ...new Set(mapItems)])
    }, [items])
    

    const handlePageClick = (e) => {
      const newOffset = (e.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    const handleFilter = (e) =>{
        e.preventDefault()
        const {value} = e.target
        const ordered = items.filter(e =>{
            const category= e.publishedCategory.name.toLowerCase()
            const valueLowerCase= value.toLowerCase()
            console.log(value,"yo")
            return category.includes(valueLowerCase)
        })
        console.log(ordered)
        setItems(ordered)
    }
  
    return (
        <>
        <div className='bg-tertiary w-full h-12 text-white grid grid-cols-5'>
            <div className='col-span-3 my-auto flex justify-center'>
            <button onClick={() =>setItems(jobs)} className='mx-3'>Reset</button>
                <input 
                onChange={(e) => handleInputChange(e)}
                className='border-2 border-primary h-8 sm:w-6/12 rounded-sm text-black' 
                placeholder='Search for keywords'
                value={input}
                />
                <button type="submit" onClick={(e) =>handleInputSubmit(e)} className='ml-1'>
                    🔎
                </button>
            </div>
            <div className='group my-auto flex ml-12 sm:ml-0 justify-center relative'>
                Filter by ⤵
                <div className='flex-col overflow-y-auto max-h-56 overflow-x-auto rounded-sm bg-slate-500 mt-6 space-y-2 w-fit p-3 absolute hidden group-hover:block'>
                    {categories && categories.map(e => {
                        return <button key={e} onClick={(e) => handleFilter(e)} className='hover:bg-slate-300 p-2'>{e}</button>
                    })}
                </div>
            </div>
        </div>
        <div className='grid sm:grid-cols-3 gap-4'>
            {currentItems?.map((e) => {
                return (
                <Cardjob 
                key={e.id} 
                title={e.title}
                category={e.publishedCategory.name}
                type={e.employmentType}
                description={e.publicDescription}
                id={e.id}
                />) 
            })}
        </div>
            <ReactPaginate
            className='flex justify-center text-tertiary space-x-8 my-12'
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    )
}
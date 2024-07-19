"use client"
import React, { useEffect, useState } from "react";
import { useFetchSearchQuery } from "../services/searchApi";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/searchSlice";
import Link from 'next/link'

 const Search = () => {
    const [value, setValue] = useState('')
    const [page, setPage] = useState(1)
    const { data, error, isLoading } = useFetchSearchQuery({searchText: value, page})
    const dispatch = useDispatch()
    useEffect(() => {
            if(data) {
                dispatch(setSearch(data.results))
            }
    }, [value, page, data, dispatch])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Failed to load search</div>;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
        return (
        <div>
            <div>
            <form>
               <input 
               type="text"
               onChange={handleChange}
               placeholder="type..."
               />
               <Link href="/search">
                  <button>Search</button>
               </Link>
             </form>
            </div>
        </div>
        )
    }
export default Search
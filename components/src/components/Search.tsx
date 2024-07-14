"use client"
import React, { useEffect, useState } from "react";
import { useFetchSearchQuery } from "../services/searchApi";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/searchSlice";
import { RootState } from "../redux/store";
import Link from 'next/link'

 const Search = () => {
    const [value, setValue] = useState('')
    const [page, setPage] = useState(1)
    const { data, error, isLoading } = useFetchSearchQuery({searchText: value, page})
    const search = useSelector((state: RootState) => state.search.search); 
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
            {search && search.map((el) => (
                <div key={el.id}>
                <img src= {`https://image.tmdb.org/t/p/w200${el.poster_path}`}/>
                <h2>{el.name || el.title}</h2>
                <p>{el.vote_average}</p>
            </div>
            ))}
        </div>
        )
    }
export default Search
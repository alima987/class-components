"use client"
import { useEffect, useState } from "react";
import { useFetchSearchQuery } from "../../services/searchApi";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/slices/searchSlice";
import Link from 'next/link'
import { RiSearchLine } from "react-icons/ri";
import styles from './search.module.css'

 const Search = () => {
    const [value, setValue] = useState('')
    const [page] = useState<number>(1)
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
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <form className={styles.form}>
               <input 
               type="text"
               onChange={handleChange}
               placeholder="search..."
               className={styles.input}
               />
               <Link href="/search">
               <RiSearchLine className={styles.search_icon}/>
               </Link>
             </form>
            </div>
        </div>
        )
    }
export default Search
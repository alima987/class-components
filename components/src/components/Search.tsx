import React, { useState } from "react";
interface Props {
    onSearch:(query: string) => void
}
 const Search = ({onSearch}: Props) => {
    const [value, setValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleSearch = () => {
        onSearch(value);
    }
        return (
             <div>
               <input 
               type="search"
               value={value}
               onChange={handleChange}
               placeholder="type..."
               />
             <button onClick={handleSearch}>Search</button>
             </div>
        )
    }
export default Search
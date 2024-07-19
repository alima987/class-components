"use client"
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Link from 'next/link';

const SearchResults = () => {
    const search = useSelector((state: RootState) => state.search.search); 

return (
    <div>
        <div>
            {search.map((el) => {
                const isMovie = !!el.title;
                const detailLink = isMovie ? `/detail/${el.id}` : `/detail/${el.id}/tvdetail`;
                return (
                    <div key={el.id}>
                        <Link href={detailLink}>
                                <img src={`https://image.tmdb.org/t/p/w200${el.poster_path}`} alt={el.name || el.title} />
                                <h2>{el.name || el.title}</h2>
                                <p>{el.first_air_date ? el.first_air_date.slice(0, 4) : 'Year not available'}</p>
                                <p>{el.vote_average}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    </div>
);
}
export default SearchResults

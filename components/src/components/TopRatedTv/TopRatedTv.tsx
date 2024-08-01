"use client"
import React, { useEffect} from "react"
import styles from './TopRatedTv.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTopRatedTv } from "../../redux/slices/tvSlice";
import { useFetchTopRatedTVQuery } from "../../services/tvApi";
import { setLoading } from "../../redux/slices/lodingSlice";
import MediaList from "../MediaList/MediaList";

const TopRatedTv = () => {
const tvs = useSelector((state: RootState) => state.tvs.TopRatedTv); 
const isLoading = useSelector((state: RootState) => state.loading.isLoading)
const dispatch = useDispatch()
const { data, error, isLoading: queryIsLoading } = useFetchTopRatedTVQuery({})

useEffect(() => {
    dispatch(setLoading(queryIsLoading))
    if(data) {
        dispatch(setTopRatedTv(data.results))
    }
}, [data, queryIsLoading, dispatch])

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Failed to load top rated tv shows.</div>;

return (
    <div className={styles.upcom_cont}>
        <h2>Top Rated TV Shows</h2>
        <MediaList items={tvs} type="tv" styles={{ container: styles.upcom_cont, list: styles.upcom_list }} />
    </div>
)
}
export default TopRatedTv
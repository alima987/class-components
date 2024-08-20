"use client"
import { useEffect} from "react"
import styles from '../styles/moviesTvs.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTopRatedTv } from "../../redux/slices/tvSlice";
import { useFetchTopRatedTVQuery } from "../../services/tvApi";
import { setLoading } from "../../redux/slices/lodingSlice";
import MediaList from "../MediaList/MediaList";
import Slider from "../Slider/Slider";

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
    <div className={styles.cont}>
     <h2 className={styles.title}>Top Rated TV Shows</h2>
       <div className={styles.wrapper}>
        <Slider items={tvs}>
        <div className={styles.list}>
            <MediaList
            items={tvs}
            type="tv"
            styles={{
                imageContainer: styles.image_cont,
                info: styles.info,
                item: styles.item,
                img: styles.image,
                title: styles.item_title,
                vote: styles.vote,
          }}
        />
        </div>
        </Slider>
      </div>
    </div>
)
}
export default TopRatedTv
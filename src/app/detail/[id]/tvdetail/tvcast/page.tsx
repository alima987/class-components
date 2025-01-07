'use client'
import { TVDetailData } from "../../../../../utils/interfaces";
import styles from '../../cast/cast.module.css'
import noPhoto from '../../../../../../public/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
import { getCastTVDetail, TVDetailProps } from "../../../../../utils/tvDetailApis";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { setTvCastDetail } from "../../../../../redux/slices/tvDetailSlice";
import { useEffect } from "react";

const FullTVCast = ({ params }: TVDetailProps) => {
    const { id } = params
    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.language.language);
    const cast = useSelector((state: RootState) => state.tvDetail.cast);
    
    useEffect(() => {
        const fetchData = async () => {
        const castData = await getCastTVDetail(id, language)
          dispatch(setTvCastDetail(castData.cast));
        };
    
        fetchData();
      }, [id, language, dispatch]);
    return (
        <div className={styles.cast}>
        <div className={styles.cast_list}>{cast?.map((el: TVDetailData, index: number) => (
                <div key={`${el.id}-${index}`} className={styles.cast_item}>
                <img src={el.profile_path ? `https://image.tmdb.org/t/p/w500${el.profile_path}` : noPhoto.src} className={styles.cast_img}/>
                <p className={styles.cast_name}>{el.name}</p>
                <p className={styles.movie_cast_character}>{el.character}</p>
            </div>
                ))}</div>
        </div>
    )
}
export default FullTVCast
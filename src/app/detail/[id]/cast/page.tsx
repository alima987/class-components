'use client'
import { DetailData } from "../../../../utils/interfaces";
import styles from './cast.module.css'
import noPhoto from '../../../../../public/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
import { DetailProps, getCastDetail } from "../../../../utils/movieDetailApis";
import { RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCastDetail } from "../../../../redux/slices/movieDetailSlice";

const FullCast = ({ params }: DetailProps) => {
    const { id } = params
    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.language.language);
    const cast = useSelector((state: RootState) => state.movieDetail.cast);

    useEffect(() => {
        const fetchData = async () => {
        const castData = await getCastDetail(id, language)
          dispatch(setCastDetail(castData.cast));
        };
    
        fetchData();
      }, [id, language, dispatch]);
    return (
        <div className={styles.cast}>
        <div className={styles.cast_list}>{cast?.map((el: DetailData, index: number) => (
                <div key={`${el.id}-${index}`} className={styles.cast_item}>
                <img src={el.profile_path ? `https://image.tmdb.org/t/p/w500${el.profile_path}` : noPhoto.src} className={styles.cast_img}/>
                <p className={styles.cast_name}>{el.name}</p>
                <p className={styles.movie_cast_character}>{el.character}</p>
            </div>
                ))}</div>
        </div>
    )
}
export default FullCast
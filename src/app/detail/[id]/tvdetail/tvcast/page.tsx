import { TVDetailData } from "../../../../../utils/interfaces";
import styles from '../../cast/cast.module.css'
import noPhoto from '../../../../../../public/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
import { getCastTVDetail, TVDetailProps } from "../../../../../utils/tvDetailApis";

const FullTVCast = async ({ params }: TVDetailProps) => {
    const { id } = params
    const cast = await getCastTVDetail(id)
    return (
        <div className={styles.cast}>
        <div className={styles.cast_list}>{cast?.cast?.map((el: TVDetailData, index: number) => (
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
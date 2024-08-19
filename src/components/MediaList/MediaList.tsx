import Link from 'next/link';
interface MediaItem {
    id: string,
    vote_average: number,
    poster_path: string,
    backdrop_path: string,
    name?: string;
    title?: string;
}

interface MediaListProps {
    items: MediaItem[];
    type: 'movie' | 'tv';
    styles: {
        imageContainer: string;
        info: string;
        item: string;
        img: string;
        title: string;
        vote: string;
    };
}

const MediaList = ({ items, type, styles }: MediaListProps) => {
    return (
        <>
        {items.map((item) => (
                <div key={item.id} className={styles.item}>
                    <Link href={`/detail/${item.id}/${type === 'tv' ? 'tvdetail' : ''}`}>
                    <div className={styles.imageContainer}>
                            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.name || item.title} className={styles.img}/>
                            <div className={styles.info}>
                                <h2 className={styles.title}>{item.name || item.title}</h2>
                                <p className={styles.vote}>{item.vote_average}</p>
                            </div>
                    </div>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default MediaList;

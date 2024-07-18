/*import { DetailCast } from "../../../../utils/interfaces";
export interface CastProps {
    params: {
        id: DetailCast['id'],
    }
  }
export async function getCastDetail( id: DetailCast['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }
const Cast = async ({params}: CastProps) => {
    const { id } = params
    const cast = await getCastDetail(id);
    return (
        <div>
            <p>{cast.name}</p>
        </div>
    )
}
export default Cast*/
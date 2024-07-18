export interface DetailData {
    id: number,
    backdrop_path: string,
    budget: number,
    genres: { id: number, name: string }[],
    origin_country: string[],
    release_date: string,
    tagline: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    title: string,
    }
export interface DetailCast {
    id: number,
    name: string,
    profile_path: string,
    character: string
}
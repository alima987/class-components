import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";
interface MovieProviderProps {
    children: ReactNode;
  }
  interface MovieContextType {
    activeGenre: number;
    setActiveGenre: Dispatch<SetStateAction<number>>;
    activeTVGenre: number
    setActiveTVGenre: Dispatch<SetStateAction<number>>;
    handlePageChange: (selectedItem: { selected: number }) => void;
  }
  export const MovieContext = createContext<MovieContextType>({
    activeGenre: 28,
    setActiveGenre: () => {},
    activeTVGenre: 10759,
    setActiveTVGenre: () => {},
    handlePageChange: () => {}
  })
const MovieProvider = ({ children }: MovieProviderProps) => {
    const [activeGenre, setActiveGenre] = useState(28)
    const [/*page*/, setPage] = useState<number>(1)
    const [activeTVGenre, setActiveTVGenre] = useState(10759)
    const handlePageChange = (selectedItem: { selected: number }) => {
      setPage(selectedItem.selected + 1); 
  }

    const contextValue = {
        activeGenre,
        setActiveGenre,
        activeTVGenre, 
        setActiveTVGenre,
        handlePageChange
      }
      return (
        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    )
}
export default MovieProvider
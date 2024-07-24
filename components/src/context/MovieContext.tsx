import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";
interface MovieProviderProps {
    children: ReactNode;
  }
  interface MovieContextType {
    activeGenre: number;
    setActiveGenre: Dispatch<SetStateAction<number>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    handlePageChange: (selectedItem: { selected: number }) => void;
  }
  export const MovieContext = createContext<MovieContextType>({
    activeGenre: 28,
    setActiveGenre: () => {},
    page: 1,
    setPage: () => {},
    handlePageChange: () => {},
  })
const MovieProvider = ({ children }: MovieProviderProps) => {
    const [activeGenre, setActiveGenre] = useState(28)
    const [page, setPage] = useState(1)

    const handlePageChange = (selectedItem: { selected: number }) => {
        setPage(selectedItem.selected + 1); 
    };

   
    const contextValue = {
        activeGenre,
        setActiveGenre,
        page, 
        setPage,
        handlePageChange
      }
      return (
        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    )
}
export default MovieProvider
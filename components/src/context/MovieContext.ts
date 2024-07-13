import { createContext } from "react";

 export const MovieContext = createContext({

})

 export const MovieProvider = ({children}) => {


}
const contextValue = {

}
return (
    <MovieContext.Provider value={contextValue}>
        {children}
    </MovieContext.Provider>
)
export { MovieContext, MovieProvider };
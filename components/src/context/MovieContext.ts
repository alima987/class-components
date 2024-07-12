import { createContext } from "react";

 const MovieContext = createContext({

})

 const MovieProvider = ({children}) => {


}
const contextValue = {

}
return (
    <MovieContext.Provider value={contextValue}>
        {children}
    </MovieContext.Provider>
)
export { MovieContext, MovieProvider };
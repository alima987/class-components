/*import React, { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"; 
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; // icons form react-icons
import { IconContext } from "react-icons"; // for customizing icons
import { MovieData } from "../redux/slices/movieSlice";
export interface PaginationProps {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
    movies: MovieData[]
}
const Pagination = ({page, setPage, totalPages, movies}: PaginationProps) => {
    const [filterData, setFilterData] = useState<MovieData[]>([]);
    const n = 3

    useEffect(() => {
        setFilterData(
            movies.filter((item, index) => {
                return (index >= page * n) & (index < (page + 1) * n);
            })
        );
      }, [page, movies, n]);

return (
    <div className="App">
    <ul>
      {filterData && filterData.map((item, index) => <li>Item #{item}</li>)}
    </ul>
    <ReactPaginate
      containerClassName={"pagination"}
      activeClassName={"active"}
      pageClassName={"page-item"}
      onPageChange={(event) => setPage(event.selected)}
      breakLabel="..."
      pageCount={Math.ceil(data.length / n)}
      previousLabel={
        <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
          <AiFillLeftCircle />
        </IconContext.Provider>
      }
      nextLabel={
        <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
          <AiFillRightCircle />
        </IconContext.Provider>
      }
    />
  </div>
)
}
export default Pagination*/
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate"; 
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; // icons from react-icons
import { IconContext } from "react-icons"; // for customizing icons
import { MovieData } from "../redux/slices/movieSlice";

export interface PaginationProps {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
    movies: MovieData[];
}

const Pagination = ({ page, setPage, totalPages, movies }: PaginationProps) => {
    const [filterData, setFilterData] = useState<MovieData[]>([]);
    const n = 3;

    useEffect(() => {
        setFilterData(
            movies.filter((item, index) => {
                return (index >= page * n) && (index < (page + 1) * n);
            })
        );
    }, [page, movies, n]);

    return (
        <div className="App">
            <ReactPaginate
                containerClassName={"pagination"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                onPageChange={(event) => setPage(event.selected)}
                breakLabel="..."
                pageCount={totalPages}
                previousLabel={
                    <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                        <AiFillLeftCircle />
                    </IconContext.Provider>
                }
                nextLabel={
                    <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                        <AiFillRightCircle />
                    </IconContext.Provider>
                }
            />
        </div>
    );
}

export default Pagination;

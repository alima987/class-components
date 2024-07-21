import React from 'react';
import ReactPaginate from 'react-paginate';

export interface PaginationProps {
    pageCount: number; 
    pageRangeDisplayed?: number; 
    marginPagesDisplayed?: number; 
    onPageChange: (selectedItem: { selected: number }) => void; 
}

const Pagination: React.FC<PaginationProps> = ({
    pageCount,
    pageRangeDisplayed = 3,
    marginPagesDisplayed = 1,
    onPageChange,
}) => {

    return (
        <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={pageRangeDisplayed}
            marginPagesDisplayed={marginPagesDisplayed}
            onPageChange={onPageChange}
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
    );
}

export default Pagination;



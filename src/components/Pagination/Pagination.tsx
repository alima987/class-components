import ReactPaginate from 'react-paginate';
import styles from './pagination.module.css'

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
            containerClassName={styles.pagination}
            activeClassName={styles.active}
            previousClassName={styles.previous}
            nextClassName={styles.next}
            breakClassName={styles.break}
            disabledClassName={styles.disabled}
        />
    );
}

export default Pagination;



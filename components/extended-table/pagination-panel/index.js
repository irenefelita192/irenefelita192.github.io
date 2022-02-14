import ReactPaginate from 'react-paginate'
import styles from './styles'
import globalStyles from './global-styles'
//pagination on the right : 1,2,3,4,5
export default function PaginationPanel({
    onPageChange,
    totalPage,
    currentPage,
    isDesktop,
    textLang,
}) {
    return (
        <div className={`pagination-panel ${isDesktop ? '' : 'is-mobile'}`}>
            <ReactPaginate
                previousLabel={textLang ? textLang['prev'] : 'Prev'}
                nextLabel={textLang ? textLang['next'] : 'Next'}
                breakLabel={'...'}
                breakClassName={'page-item-break'}
                pageCount={totalPage}
                marginPagesDisplayed={isDesktop ? 2 : 1}
                pageRangeDisplayed={isDesktop ? 5 : 1}
                onPageChange={onPageChange}
                containerClassName={'pagination my-0 pagination-sm'}
                activeClassName={'active'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                forcePage={currentPage - 1}
                // initialPage={1}
            />

            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </div>
    )
}

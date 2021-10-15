import ReactPaginate from 'react-paginate'

//pagination on the right : 1,2,3,4,5
export default function PaginationPanel({
    onPageChange,
    totalPage,
    currentPage,
}) {
    return (
        <div>
            <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'page-item-break'}
                pageCount={totalPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
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
        </div>
    )
}

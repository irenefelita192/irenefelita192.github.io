export default function PaginationTotal({ from, to, size }) {
    return (
        <div className="pagination-total">
            Showing{' '}
            <b>
                {from} to {to}
            </b>{' '}
            of {size} entries
        </div>
    )
}

import styles from './styles'
export default function PaginationTotal({
    from,
    to,
    size,
    isDesktop,
    textLang,
}) {
    return (
        <>
            <div className={`pagination-total ${isDesktop ? '' : 'is-mobile'}`}>
                {textLang ? textLang['showing'] : 'Showing'}{' '}
                <b>
                    {from} {textLang ? textLang['to'] : 'to'} {to}
                </b>{' '}
                {textLang ? textLang['of'] : 'of'} {size}{' '}
                {textLang ? textLang['entries'] : 'entries'}
            </div>
            <style jsx>{styles}</style>
        </>
    )
}
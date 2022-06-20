import styles from './styles'
export default function PaginationTotal({
    from,
    to,
    size,
    isDesktop,
    textLang,
}) {
    return (
        <div className={`pagination-total`}>
            <div className={`pagination-total__desc`}>
                {textLang ? textLang['showing'] : 'Showing'}{' '}
                <b>
                    {from} {textLang ? textLang['to'] : 'to'} {to}
                </b>{' '}
                {textLang ? textLang['of'] : 'of'} {size}{' '}
                {textLang ? textLang['entries'] : 'entries'}
            </div>
            <div className={`pagination-total__note ${isDesktop ? '' : 'is-mobile'}`}>{textLang['notes']}</div>
            <style jsx>{styles}</style>
        </div>
    )
}

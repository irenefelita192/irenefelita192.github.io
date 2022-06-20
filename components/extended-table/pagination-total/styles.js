import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .pagination-total {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
    }

    .pagination-total__desc {
        line-height: 22px;
        margin-bottom: 4px;
    }

    .pagination-total__note {
        font-weight: 300;
        font-size: 12px;
        line-height: 1.5;
        color: #7B7B7B;
        max-width: 450px;
    }

    .pagination-total__note.is-mobile {
        font-size: 13px;
        margin-bottom: 60px;
    }
`

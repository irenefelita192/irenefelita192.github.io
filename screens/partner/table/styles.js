import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        padding: 48px 10.5%;
    }

    .pagination-wrapper {
        border-top: 1px solid #c9c9c9;
        margin-top: 40px;
        padding: 22px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .top-table-wrapper {
        display: flex;
        align-items: end;
        line-height: 1.43;
        margin-bottom: 23px;
    }

    .table-notes {
        margin-top: 16px;
        font-size: 15px;
        line-height: 1;
        color: ${theme.colors.gray};
    }
`

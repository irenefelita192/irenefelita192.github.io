import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        padding: 20px 24px;
        line-height: 1.4;
    }

    .table-item {
        border: 1px solid #c9c9c9;
        border-radius: 8px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .table-header {
        background: #c9e4e3;
        padding: 12px 16px;
        font-weight: 600;
        font-size: 16px;
        line-height: 1.37;
        color: #076a64;
    }

    .table-row {
        padding: 14px 16px 0 16px;
        display: flex;
    }

    .table-row:first-child {
        padding-top: 16px;
    }

    .table-row:last-child {
        padding-bottom: 16px;
    }

    .table-head {
        font-weight: 600;
        font-size: 14px;
        line-height: 1.86;
        color: ${theme.colors.black};
        min-width: 30%;
        max-width: 30%;
    }

    .table-data.can-scroll {
        white-space: nowrap;
        overflow: hidden;
        height: 30px;
    }

    .table-data.can-scroll > div {
        overflow-x: auto;
        height: 40px;
    }

    .top-table-wrapper {
        display: flex;
        align-items: end;
        line-height: 1.43;
        margin-bottom: 32px;
        flex-wrap: wrap;
    }

    .table-notes {
        text-align: center;
        font-weight: normal;
        font-size: 12px;
        color: ${theme.colors.gray};
        margin-bottom: 40px;
    }

    .pagination-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pagination-total {
        margin-bottom: 66px;
    }

    .table-empty-placeholder {
        display: flex;
        justify-content: center;
    }

    @media screen and (min-width: 768px) {
        .top-table-wrapper {
            flex-wrap: nowrap;
        }
    }
`

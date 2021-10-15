import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css.global`
    /* tablet start */
    .react-bootstrap-table {
        border: 1px solid #c9c9c9;
        border-radius: 8px;
    }

    .react-bootstrap-table table {
        border-radius: 8px;
        overflow: hidden;
    }
    .react-bootstrap-table table > thead {
        background-color: #c9e4e3;
        border-radius: 8px;
    }

    .react-bootstrap-table table th,
    .react-bootstrap-table table td {
        padding: 16px;
        line-height: 1.43;
        color: ${theme.colors.black};
    }

    .react-bootstrap-table table td:first-child {
        font-weight: 600;
    }

    .react-bootstrap-table table th {
        border-bottom: 1px solid #c9c9c9;
        font-weight: 600;
        font-size: 14px;
        line-height: 1.43;
        color: #076a64;
    }

    /* pagination start */
    .pagination {
        justify-content: end;
    }

    .pagination .page-item {
        padding: 1px 8px;
        margin: 0 4px;
    }

    .pagination .page-item > a {
        font-family: 'Museo', sans-serif;
        font-size: 18px;
        line-height: 1.43;
        color: ${theme.colors.black};
    }

    .pagination .page-item.active > a {
        color: ${theme.colors['vida-green']};
    }

    .pagination .page-item.active {
        border: 2px solid ${theme.colors['vida-green']};
        border-radius: 8px;
    }

    .pagination .page-item:first-child,
    .pagination .page-item:last-child {
        background-color: ${theme.colors['vida-green']};
        border-radius: 8px;
        padding: 10px 12px;
    }

    .pagination .page-item:first-child {
        margin-right: 14px;
    }

    .pagination .page-item:last-child {
        margin-left: 14px;
    }

    .pagination .page-item:first-child > a,
    .pagination .page-item:last-child > a {
        color: ${theme.colors.white};
        font-size: 13px;
        line-height: 1.5;
    }

    .pagination .page-item.disabled {
        background-color: #9c9c9c;
    }
`

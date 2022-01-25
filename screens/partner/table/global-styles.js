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
        width: 100%;
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

    .react-bootstrap-table table td {
        font-size: 14px;
        line-height: 1.5;
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

    .react-bootstrap-table table .field-link {
        color: ${theme.colors['vida-green']};
    }
`

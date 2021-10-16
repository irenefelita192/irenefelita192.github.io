import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css.global`
    .pagination {
        justify-content: end;
    }

    .pagination .page-item {
        margin: 0 4px;
    }

    .pagination .page-item > a {
        font-family: 'Museo', sans-serif;
        font-size: 18px;
        line-height: 1.43;
        color: ${theme.colors.black};
        padding: 1px 8px;
        display: block;
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
        padding: 10px 12px;
    }

    .pagination .page-item.disabled {
        background-color: #9c9c9c;
    }
`

import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'
const assetPrefix = process.env.config?.assetPrefix ?? ''
export default css`
    /*search start*/
    .search-wrapper {
        position: relative;
        margin-left: auto;
        width: 34%;
    }

    .search-box {
        display: flex;
        align-items: center;
    }

    .search-box {
        width: 100%;
        background: #fbfbfb;
        border: 0.6px solid #6b6b6b;
        box-sizing: border-box;
        border-radius: 12px;
        outline: 0;
        /* padding: 0 13px; */
        font-weight: 300;
        font-size: 16px;
        line-height: 1.37;
    }

    /* .search-btn {
        background-color: ${theme.colors['vida-dark-green']};
        color: ${theme.colors.white};
        font-weight: 600;
        font-size: 14px;
        line-height: 1.43;
        cursor: pointer;
        box-shadow: none;
        border: 0;
        outline: 0;
        border-radius: 10px;
        padding: 10px;
        margin-left: 10px;
    } */

    .dropdown-options {
        background-color: ${theme.colors['vida-dark-green']};
        padding: 10px;
        width: 30%;
        border-radius: 11px 0 0 11px;
        color: ${theme.colors.white};
        font-weight: 600;
        font-size: 14px;
        line-height: 1.43;
        cursor: pointer;
    }

    .dropdown-options > span.selected-caret {
        display: flex;
        align-items: center;
        justify-content: end;
        width: 45%;
        height: auto;
        border-radius: 0 10px 10px 0;
    }

    .selected-caret > i {
        border: 2px solid ${theme.colors.white};
        border-radius: 1px;
        border-right: 0;
        border-top: 0;
        content: ' ';
        display: block;
        height: 8px;
        width: 8px;
        margin-top: -3px;
        transform: rotate(-45deg);
        transform-origin: center;
    }

    .dropdown-search-list {
        position: absolute;
        right: 0;
        width: 75%;
        max-height: 300px;
        background-color: #fbfbfb;
        overflow-y: auto;
    }

    /*mobile*/
    .search-wrapper.is-mobile {
        width: 100%;
        margin-top: 16px;
    }
`

import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'
const assetPrefix = process.env.config?.assetPrefix ?? ''
export default css`
    /* page size start */
    .dropdown-page-size {
        cursor: pointer;
    }

    .wrapper-title {
        font-size: 14px;
        line-height: 1.43;
        color: #111827;
        margin-bottom: 4px;
    }

    .dropdown-page-size {
        background: #fbfbfb;
        border: 0.6px solid #6b6b6b;
        box-sizing: border-box;
        border-radius: 12px;
        width: 115px;
        position: relative;
    }

    .dropdown {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .dropdown > span {
        display: block;
        padding: 10px 13px;
    }

    .dropdown > span.selected-item {
        font-weight: 500;
        font-size: 14px;
        line-height: 1.43;
        color: ${theme.colors['vida-black']};
    }

    .dropdown > span.selected-caret {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45%;
        height: auto;
        border-radius: 0 10px 10px 0;
        background-color: #108e87;
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

    /*mobile*/
    .wrapper-page-size.is-mobile {
        width: 35%;
    }

    .is-mobile .dropdown-page-size {
        width: 100%;
    }
`

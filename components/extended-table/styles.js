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
        color: ${theme.colors['black30']};
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

    /* goto start */
    .pagination-goto {
        margin-left: 24px;
    }

    .wrapper-goto {
        background: #fbfbfb;
        border: 0.6px solid #6b6b6b;
        box-sizing: border-box;
        border-radius: 12px;
        width: 175px;
        position: relative;
        overflow: hidden;
    }

    .wrapper-goto > input {
        border: 0;
        outline: 0;
        width: 68%;
        padding: 10px 13px;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.43;
        color: #6b7280;
    }

    .wrapper-goto > button {
        width: 32%;
        padding: 10px 13px;
        background-color: #108e87;
        border: 0;
        outline: 0;
        box-shadow: none;
        font-weight: 600;
        font-size: 14px;
        line-height: 1.43;
        color: ${theme.colors.white};
    }

    /*search start*/
    .search-wrapper {
        position: relative;
        margin-left: auto;
        width: 34%;
    }

    .search-wrapper > input {
        width: 100%;
        height: 48px;
        background: #fbfbfb;
        border: 0.6px solid #6b6b6b;
        box-sizing: border-box;
        border-radius: 12px;
        outline: 0;
        padding: 13px 16px;
        font-weight: 300;
        font-size: 16px;
        line-height: 1.37;
    }

    .search-wrapper > i {
        position: absolute;
        top: 50%;
        right: 14px;
        transform: translate(0, -50%);
        display: block;
        width: 20px;
        height: 20px;
        background-image: url(${assetPrefix}/images/partner/search-icon.svg);
        background-size: contain;
        background-repeat: no-repeat;
    }
`

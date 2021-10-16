import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'
const assetPrefix = process.env.config?.assetPrefix ?? ''
export default css`
    /* goto start */
    .pagination-goto {
        margin-left: 24px;
    }

    .wrapper-title {
        font-size: 14px;
        line-height: 1.43;
        color: #111827;
        margin-bottom: 4px;
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
        cursor: pointer;
    }

    /*mobile*/

    .pagination-goto.is-mobile {
        margin-left: 16px;
        width: calc(65% - 16px);
    }
    .is-mobile .wrapper-goto {
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        .pagination-goto.is-mobile {
            margin-right: 16px;
        }
    }
`

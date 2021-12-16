import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        line-height: 1;
        padding: 32px 10%;
    }

    .wrapper h1 {
        padding: 0;
        color: ${theme.colors['vida-black']};
        font-family: 'Museo', sans-serif;
        font-size: 20px;
        font-weight: 700;
    }

    .wrapper h2 {
        font-family: 'Museo', sans-serif;
        font-size: 20px;
        color: ${theme.colors['vida-black']};
        font-weight: 700;
        margin-bottom: 20px;
    }

    .promo-section {
        line-height: 1;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        width: 100%;
        margin-bottom: 32px;
    }

    /* .promo-box-wrapper {
        width: calc(100% / 4);
    } */

    .promo-box {
        border: 1px solid rgba(123, 123, 123, 0.2);
        border-radius: 4px;
        overflow: hidden;
        width: 100%;
        box-sizing: content-box;
    }

    .promo-box:nth-child(4n) {
        margin-right: 0;
    }

    .promo-box:hover {
        transition: all 0.5s;
        box-shadow: 0 2px 10px 2px rgb(0 0 0 / 10%);
    }

    .promo-box img {
        width: 100%;
        /* height: 180px; */
        /* height: 52.69%; //16:9 */
    }

    .promo-info {
        padding: 16px;
        color: ${theme.colors['vida-gray']};
        font-size: 14px;
        line-height: 1.3;
    }

    .promo-title {
        color: ${theme.colors['vida-black']};
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        height: 40px;
        overflow: hidden;
        line-height: 1.2;
        margin-bottom: 10px;
        font-size: 16px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .promo-category {
        /* min-height: 18px; */
        margin-bottom: 5px;
    }

    .promo-time {
        color: ${theme.colors['vida-black']};
        font-size: 12px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }

    .promo-time > i {
        background-size: contain;
        background-repeat: no-repeat;
        width: 18px;
        height: 18px;
        display: inline-block;
        margin-right: 5px;
    }

    .promo-highlight {
        color: ${theme.colors['vida-black']};
        max-height: 34px;
        font-size: 13px;
        line-height: 1.3;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    :global(.accordions) {
        margin-bottom: 16px;
    }

    :global(.accordion-label) {
        line-height: 1.3;
        padding: 16px;
        background-color: rgb(248, 248, 248);
        border-radius: 4px;
        font-family: 'Museo', sans-serif;
        font-size: 12px;
        color: ${theme.colors['vida-black']};
    }

    .faq-content {
        color: ${theme.colors['vida-black']};
        font-size: 12px;
        padding: 10px 0;
        line-height: 1.3;
    }

    @media screen and (max-width: 768px) {
        .promo-section {
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
            margin-bottom: 32px;
        }
    }

    @media screen and (max-width: 640px) {
        .promo-section {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
            margin-bottom: 32px;
        }
    }

    @media screen and (max-width: 500px) {
        .promo-section {
            grid-template-columns: 1fr;
            margin-bottom: 32px;
        }
    }
`

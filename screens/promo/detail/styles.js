import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        line-height: 1;
        padding: 32px 10%;
        display: flex;
        background-color: ${theme.colors['light-sand']};
    }

    .promo-content :global(h1) {
        color: ${theme.colors['vida-black']};
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 16px;
        margin: 0;
        margin-bottom: 10px;
    }

    .wrapper .title {
        color: ${theme.colors['vida-black']};
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 20px;
        margin: 40px 30px 0;
    }

    .main-section {
        width: calc(100% * 2 / 3);
        margin-right: 20px;
        border: 1px solid rgba(123, 123, 123, 0.2);
        border-radius: 3px;
        background-color: white;
    }

    .info-section {
        width: calc(100% * 1 / 3);
        margin-left: 10px;
        position: relative;
        display: block;
    }

    .separator {
        border-top: 1px solid rgba(123, 123, 123, 0.2);
        width: calc(100% - 60px);
        height: 1px;
        margin: 0 30px;
    }

    .promo-image img {
        width: 100%;
    }

    .promo-detail-mobile {
        display: none;
        margin: 0 30px 0;
        padding: 15px 0 15px;
        line-height: 1.5;
        font-size: 12px;
        border-top: 1px solid rgba(123, 123, 123, 0.2);
        border-bottom: 1px solid rgba(123, 123, 123, 0.2);
        font-size: 14px;
        color: ${theme.colors['vida-gray']};
    }

    .promo-detail-box-mobile {
        text-align: left;
        display: flex;
        flex-wrap: nowrap;
    }

    .promo-detail-box-mobile > div {
        padding-right: 48px;
    }

    .promo-detail {
        border: 1px solid rgba(123, 123, 123, 0.2);
        border-radius: 3px;
        font-size: 12px;
        color: ${theme.colors['vida-gray']};
        /* padding: 30px; */
        position: fixed;
        bottom: auto;
        opacity: 0;
        background-color: white;
    }

    .promo-detail.not-sticky {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .promo-detail > div {
        padding: 20px 30px;
        font-size: 14px;
        text-align: center;
    }

    .promo-detail > div:first-child {
        color: ${theme.colors['vida-black']};
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        border-bottom: 1px solid rgba(123, 123, 123, 0.2);
    }

    .promo-detail .promo-box {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        text-align: center;
        padding: 0;
        border-bottom: 1px solid rgba(123, 123, 123, 0.2);
    }

    .promo-box > div {
        width: 100%;
        padding: 20px 5px;
    }

    .promo-box > div:first-child {
        border-right: 1px solid rgba(123, 123, 123, 0.2);
    }

    .promo-detail p {
        line-height: 1.4;
        padding-bottom: 5px;
        font-size: 12px;
    }

    .promo-content {
        line-height: 1.4;
        padding: 15px 30px 15px;
    }

    .promo-content :global(h2) {
        color: ${theme.colors.black27};
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 14px;
        padding: 10px 0;
    }

    .promo-content :global(ol > li > ol) {
        padding-top: 10px;
        font-size: 14px;
    }

    .promo-content :global(ol) {
        margin-left: 25px;
        font-size: 14px;
    }

    .promo-content :global(ol > li) {
        margin: 0 0 10px;
        padding-left: 5px;
    }

    .promo-content :global(ul) {
        font-size: 14px;
        list-style: disc;
        margin-left: 25px;
    }

    .promo-content :global(ul > li) {
        margin: 0 0 10px;
        padding-left: 5px;
    }

    .promo-content :global(code) {
        background-color: transparent;
    }

    @media screen and (max-width: 768px) {
        .wrapper {
            display: block;
            padding: 0 0 32px;
        }

        .promo-detail-mobile {
            display: block;
        }

        .main-section,
        .promo-detail {
            width: 100%;
            border-left: none;
            border-right: none;
        }

        .info-section,
        .separator {
            display: none;
        }
    }

    @media screen and (max-width: 430px) {
        .promo-detail-box-mobile {
            justify-content: space-between;
        }

        .promo-detail-box-mobile > div {
            padding-right: 0;
        }
    }
`

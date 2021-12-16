import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        line-height: 1;
        padding: 32px 10%;
    }

    .wrapper h1 {
        color: ${theme.colors['vida-black']};
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 20px;
        margin: 40px 0 10px;
    }

    .promo-detail {
        font-size: 12px;
        color: ${theme.colors['vida-gray']};
        margin-bottom: 30px;
    }

    .promo-detail > div {
        margin-bottom: 5px;
    }

    .promo-content {
        line-height: 1.4;
    }

    .promo-content :global(h2) {
        color: ${theme.colors.black27};
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 14px;
        padding: 10px 0;
    }

    .promo-content :global(p) {
        padding-bottom: 10px;
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

    @media screen and (max-width: 640px) {
    }
`

import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .hero-wrapper {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top right;
        position: relative;
    }

    .hero-text {
        position: absolute;
        font-family: Inter;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.4;
        color: ${theme.colors['vida-white']};
        top: calc(50% - 80px);
        left: 154px;
        width: 100%;
    }

    .hero-text h1 {
        margin: 0;
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 60px;
        line-height: 1.1;
        width: 42%;
    }

    .hero-text > div:last-child {
        width: 38%;
    }
`

import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        font-size: 14px;
        line-height: 1.43;
        padding: 42px 12%;
    }

    .wrapper h1 {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 32px;
        line-height: 1.12;
        color: #222222;
        margin: 0;
        padding: 0;
        margin-bottom: 54px;
        text-align: center;
    }

    .th-child {
        color: #ffffff;
        font-weight: bold;
        background-color: #70a7dc;
        font-size: 20px;
    }

    .th-child > td {
        text-align: center !important;
        font-weight: bold;
    }

    .th-child h4 {
        font-weight: bold;
    }
    @media screen and (max-width: 1024px) {
        .wrapper {
            padding: 57px 72px 100px 72px;
            min-height: 48vh;
        }
    }

    @media screen and (max-width: 640px) {
        .wrapper h1 {
            font-size: 26px;
        }

        .wrapper {
            padding: 42px;
            min-height: 0;
        }
    }
`

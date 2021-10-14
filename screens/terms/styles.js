import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        font-size: 14px;
        line-height: 1.43;
        padding: 32px 40px;
    }

    .wrapper h1 {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 32px;
        line-height: 1.12;
        color: #222222;
        margin: 0;
        padding: 0;
        margin-bottom: 16px;
    }

    @media screen and (max-width: 1024px) {
        .wrapper {
            padding: 57px 72px 100px 72px;
            min-height: 48vh;
        }
    }

    @media screen and (max-width: 640px) {
        .wrapper {
            padding: 42px;
            min-height: 0;
        }
    }
`

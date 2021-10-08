import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        display: block;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 95px;
        height: 95px;
        z-index: 20;
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 17px;
    }

    @media screen and (max-width: 1024px) {
        .wrapper {
            margin: 8px;
        }
    }

    @media screen and (max-width: 500px) {
        .wrapper {
            width: 80px;
            height: 80px;
            margin: 0;
        }
    }
`

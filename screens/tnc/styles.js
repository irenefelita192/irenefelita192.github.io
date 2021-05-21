import theme from '../../components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        display: block;
        padding: 57px 300px 126px;
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

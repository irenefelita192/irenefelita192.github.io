import css from 'styled-jsx/css'
import theme from '../global-styles/theme'

export default css.global`
    body {
        font-family: 'Bree Serif', serif;
    }

    .children-wrapper {
        margin-top: ${theme.header.height};
    }

    .children-wrapper .wrapper {
        font-family: 'Bree Serif', serif;
        min-height: 48vh;
    }

    @media screen and (max-width: 1024px) {
        .children-wrapper .wrapper {
            min-height: 60vh;
        }
    }
`

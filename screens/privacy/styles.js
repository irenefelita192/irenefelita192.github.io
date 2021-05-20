import theme from '../../components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        display: flex;
        padding: 57px ${theme.offset.container} ${theme.offset.container};
        justify-content: space-between;
    }

    @media screen and (max-width: 1024px) {
        .wrapper {
            padding: 57px 72px 100px 72px;
            min-height: 48vh;
        }
    }

    @media screen and (max-width: 640px) {
        .wrapper {
            display: block;
            padding: 42px;
            min-height: 0;
        }
    }
`

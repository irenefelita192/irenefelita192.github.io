import theme from '../../../components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .content-title {
        margin: 0 0 70px;
        font-weight: 300;
        font-size: 42px;
        line-height: 1.19;
        color: ${theme.colors.black};
    }

    .content-description p {
        margin-bottom: 20px;
    }

    .logo-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 70px;
        margin-top: 70px;
    }

    @media screen and (max-width: 768px) {
        .logo-wrapper {
            margin-top: 42px;
        }
    }

    @media screen and (max-width: 640px) {
        .content-title {
            margin: 0 0 42px;
        }

        .logo-wrapper {
            flex-direction: column;
        }

        .logo-wrapper img {
            padding: 0 20px 42px;
        }
    }
`

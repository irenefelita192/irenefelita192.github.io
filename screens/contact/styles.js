import theme from '../../components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        display: flex;
        padding: 57px ${theme.offset.container} ${theme.offset.container};
        justify-content: space-between;
    }

    .title {
        font-weight: bold;
        font-size: 18px;
        line-height: 1.2;
        margin-bottom: 14px;
    }

    .maps-wrapper {
        font-size: 14px;
        line-height: 1.3;
        width: 610px;
        height: 294px;
    }

    iframe {
        width: 100%;
        height: 100%;
    }

    .subtitle {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.37;
        margin: 32px 0 8px;
    }

    @media screen and (max-width: 1024px) {
        .wrapper {
            padding: 57px 72px 100px 72px;
        }
    }

    @media screen and (max-width: 640px) {
        .wrapper {
            display: block;
            padding: 42px;
        }

        .maps-wrapper {
            margin-top: 54px;
            width: 100%;
            height: 200px;
        }
    }
`

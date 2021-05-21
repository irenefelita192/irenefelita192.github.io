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

    .content-description {
        display: flex;
    }

    .content-item {
        margin-right: 72px;
        width: 180px;
        cursor: pointer;
    }

    .content-item img {
        width: auto;
        height: auto;
    }

    .content-item .desc {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.1;
        padding-top: 16px;
        color: ${theme.colors.black};
        white-space: nowrap;
    }

    @media screen and (max-width: 1024px) {
        .content-title {
            font-size: 40px;
        }

        .content-item {
            margin-right: 54px;
        }

        .content-item .desc {
            white-space: normal;
        }
    }

    @media screen and (max-width: 900px) {
        .content-description {
            flex-direction: column;
        }

        .content-item {
            width: 242px;
            margin-bottom: 54px;
        }

        .content-item .desc {
            white-space: normal;
            font-size: 24px;
            padding-top: 8px;
        }
    }

    @media screen and (max-width: 640px) {
        .content-title {
            font-size: 35px;
        }
    }
`

import theme from '../../components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        display: grid;
        padding: 84px ${theme.offset.container};
        grid-template-columns: 2fr 1fr;
        grid-gap: 86px;
        color: ${theme.colors.black};
    }

    .date {
        font-size: 12px;
        line-height: 1.5;
        color: ${theme.colors.gray};
        padding: 0 0 20px;
        margin: 0;
    }

    .title {
        font-weight: bold;
        font-size: 36px;
        line-height: 1.17;
        letter-spacing: -0.2px;
        color: ${theme.colors.black};
    }

    .image-wrapper {
        padding-bottom: 20px;
    }

    .content {
        font-weight: normal;
        font-size: 16px;
        line-height: 1.6;
    }

    .more-content {
        padding: 16px 0;
    }

    .more-top-title {
        font-weight: bold;
        font-size: 18px;
        line-height: 1.2;
        border-bottom: 1px solid #e3e3e3;
        padding-bottom: 10px;
    }

    .more-title {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.25;
        padding-bottom: 8px;
    }

    .more-date {
        font-size: 12px;
        line-height: 1.5;
        color: ${theme.colors.gray};
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
            display: block;
        }

        .hero-wrapper img {
            height: 200px;
            width: auto;
            object-fit: cover;
        }

        .more-wrapper {
            padding-top: 56px;
        }
    }
`

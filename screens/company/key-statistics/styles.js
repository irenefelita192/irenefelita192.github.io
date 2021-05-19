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

    .card-item {
        display: flex;
        align-items: center;
        color: ${theme.colors.black};
        margin-bottom: 80px;
    }

    .card-item.card-odd {
        flex-direction: row;
    }

    .card-item.card-odd .card-content {
        padding-left: 32px;
    }

    .card-item.card-even {
        flex-direction: row-reverse;
    }

    .card-item.card-even .card-content {
        padding-right: 32px;
    }

    .card-item img {
        width: 296px;
        height: auto;
    }

    .card-title {
        font-weight: bold;
        font-size: 26px;
        line-height: 1.15;
        padding-bottom: 12px;
    }

    .card-short {
        font-weight: 500;
        font-size: 20px;
        line-height: 1.2;
        padding-bottom: 16px;
    }
    .card-desc {
        font-size: 16px;
        line-height: 1.5;
    }

    @media screen and (max-width: 1024px) {
        .card-item img {
            width: 240px;
        }
    }

    @media screen and (max-width: 900px) {
        .card-item.card-odd,
        .card-item.card-even {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 768px) {
        .card-item img {
            width: 100%;
        }

        .card-item.card-odd .card-content,
        .card-item.card-even .card-content {
            padding-left: 0;
            padding-right: 0;
        }

        .card-item {
            margin-bottom: 54px;
        }
    }
`

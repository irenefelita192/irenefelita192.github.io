import theme from '../../../components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 155px;
        padding: 57px ${theme.offset.container};
    }

    .content-title {
        margin: 0 0 70px;
        font-weight: 300;
        font-size: 42px;
        line-height: 1.19;
        color: ${theme.colors.black};
    }

    .card-item {
        display: flex;
        align-items: flex-start;
        color: ${theme.colors.black};
        margin-bottom: 80px;
    }

    .card-content-mobile {
        display: none;
    }

    .card-item .card-content {
        padding: 0 0 0 54px;
    }

    .card-item img {
        width: 156px;
        height: auto;
    }

    .card-title {
        font-weight: 600;
        font-size: 20px;
        line-height: 1.2;
        padding-bottom: 8px;
    }

    .card-short {
        font-weight: 500;
        font-size: 16px;
        line-height: 1.2;
        color: ${theme.colors.darkGold};
        padding-bottom: 20px;
    }

    .card-desc {
        font-size: 14px;
        line-height: 1.57;
    }

    @media screen and (max-width: 900px) {
        .card-item {
            flex-direction: column;
            margin-bottom: 54px;
        }

        .card-item .card-content {
            padding: 24px 0 0;
        }
    }
`

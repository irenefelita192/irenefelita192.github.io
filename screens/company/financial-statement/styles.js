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

    .content-description {
        display: flex;
    }

    .content-item {
        margin-right: 72px;
        width: 200px;
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
`

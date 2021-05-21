import theme from '../../components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        display: block;
        padding: 57px 300px ${theme.offset.container};
        color: ${theme.colors.black};
    }

    .content-item {
        margin-bottom: 168px;
    }

    .content-item:after {
        content: '';
        border-bottom: 2px solid #ededed;
        width: calc(100% - 336px);
        height: 1px;
        display: block;
        padding-bottom: 84px;
        position: absolute;
        left: 168px;
    }

    .title {
        font-weight: 600;
        font-size: 32px;
        line-height: 36px;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
    }

    .title:before {
        content: '';
        display: block;
        background-color: #c81a21;
        width: 50px;
        height: 4px;
    }

    .title span {
        padding-left: 24px;
    }

    .short-desc {
        font-weight: 600;
        font-size: 24px;
        line-height: 1.17;
        padding-top: 16px;
        margin: 0;
    }

    .highlight {
        font-style: italic;
        font-weight: 500;
        font-size: 24px;
        line-height: 1.33;
        padding: 24px 0 56px;
        margin: 0;
    }

    .benefit-title {
        font-weight: 500;
        font-size: 24px;
        line-height: 1.17;
        padding: 64px 0 32px;
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
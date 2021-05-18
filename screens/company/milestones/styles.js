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

    .timeline-container {
    }

    .timeline-inner .timeline-item .uk-card {
        max-height: 300px;
    }

    .timeline-inner .timeline-item {
        display: flex;
        position: relative;
        margin-top: 54px;
    }

    .timeline-inner .timeline-item::before {
        background: ${theme.colors.black};
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 50px;
        width: 2px;
        z-index: -1;
    }

    .timeline-inner .timeline-item .timeline-icon {
        position: absolute;
        left: -7px;
        top: 15px;
        background: ${theme.colors.black};
        transform: rotate(-45deg);
        width: 16px;
        height: 16px;
    }

    .timeline-inner .timeline-content {
        padding: 0 0 0 50px;
        color: ${theme.colors.black};
    }

    .timeline-title {
        font-weight: 300;
        font-size: 36px;
        line-height: 1.22;
    }

    .timeline-description {
        padding: 12px 0 0;
        font-size: 16px;
        line-height: 1.5;
    }
`

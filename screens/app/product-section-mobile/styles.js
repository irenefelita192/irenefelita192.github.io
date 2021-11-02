import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        background-color: ${theme.colors['light-sand']};
        padding: 48px 32px;
        position: relative;
    }

    .content-wrapper {
        position: relative;
    }

    .content {
        font-family: 'Museo', sans-serif;
        /* font-size: 28px; */
        font-size: 19px;
        line-height: 1.29;
        position: relative;
        margin-top: 30px;
    }

    .content :global(span) {
        cursor: pointer;
        transition: color 0.3s ease-in-out;
        white-space: nowrap;
    }

    .animation-wrapper {
        position: relative;
        line-height: 1;
        height: 100%;
        display: block;
    }

    .video-wrapper {
        position: relative;
        height: 40%;
    }

    .video-wrapper video {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .video-play {
        width: 40px;
        height: 40px;
        z-index: 10;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
    }

    .bg-color {
        position: absolute;
        border-radius: 8px;
        transition: transform 0.5s ease-in-out, backgroundColor 0.3s ease-in-out,
            width 0.5s ease-in-out;
    }

    @media screen and (max-height: 600px) {
        .content {
            font-size: 19px;
        }
    }

    @media screen and (min-height: 670px) {
        .content {
            font-size: 22px;
        }
    }

    @media screen and (min-height: 820px) {
        .content {
            font-size: 23px;
        }
    }

    @media screen and (min-height: 890px) {
        .wrapper {
            padding: 60px 32px;
        }

        .content {
            font-size: 24px;
            margin-top: 35px;
        }
    }

    @media screen and (min-height: 1024px) {
        .wrapper {
            padding: 20% 10%;
        }

        .video-wrapper {
            height: 50%;
        }

        .content {
            font-size: 28px;
            margin-top: 60px;
        }
    }

    @media screen and (min-height: 1180px) {
        .content {
            font-size: 30px;
        }
    }
`

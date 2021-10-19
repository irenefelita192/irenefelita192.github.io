import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        background-color: ${theme.colors['light-sand']};
        padding: 12% 190px;
        position: relative;
    }

    .content {
        font-family: 'Museo', sans-serif;
        font-size: 36px;
        line-height: 1.33;
        position: relative;
    }

    .content :global(span) {
        cursor: pointer;
        transition: color 0.3s ease-in-out;
    }

    .animation-wrapper {
        line-height: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 95px;
    }

    .video-wrapper {
        position: relative;
    }

    .video-wrapper video {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .bg-color {
        position: absolute;
        border-radius: 12px;
        transition: transform 0.5s ease-in-out, backgroundColor 0.3s ease-in-out,
            width 0.5s ease-in-out;
        /* transform: translate3d(0, 144px, 0); */
    }

    @media screen and (max-width: 1180px) {
        .wrapper {
            padding: 10%;
        }

        .content {
            font-size: 36px;
        }

        .bg-color {
            border-radius: 12px;
        }
    }

    @media screen and (max-width: 1200px) and (min-height: 640px) {
        .content {
            font-size: 30px;
        }
    }

    @media screen and (max-height: 640px) {
        .wrapper {
            padding: 10%;
        }

        .content {
            font-size: 30px;
        }

        .bg-color {
            border-radius: 8px;
        }
    }

    @media screen and (max-height: 640px) and (max-width: 926px) {
        .wrapper {
            padding: 8%;
        }

        .content {
            font-size: 20px;
        }

        .bg-color {
            border-radius: 8px;
        }
    }

    @media screen and (max-height: 450px) and (max-width: 680px) {
        .content {
            font-size: 16px;
        }
    }
`

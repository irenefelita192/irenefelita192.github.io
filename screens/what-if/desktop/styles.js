import css from 'styled-jsx/css'
import theme from 'components/global-styles/theme'

export default css`
    .content {
        background: linear-gradient(
            180deg,
            #fff3e0 0%,
            #f6f4f1 78.65%,
            #ffffff 100%
        );
        min-height: 400px;
    }

    .question-container {
        display: none;
        width: 100%;
        height: 2000px;
    }

    .question-container.is-loaded {
        position: relative;
        display: block;
    }

    .question-text {
        position: absolute;
        bottom: 0;
        right: 8%;
        text-align: right;
        color: ${theme.colors['vida-black']};
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 48px;
        line-height: 1.17;
        z-index: 10;
        transition: all 0.1s linear;
        opacity: 0;
        max-width: 600px;
        z-index: 3;
        display: none;
    }

    .question-text > span {
        display: block;
        text-align: right;
    }

    .animate-text {
        animation: movetop 6s ease-in forwards;
    }

    .animate-portrait {
        animation: moveback 8s ease-in forwards;
    }

    .animate-bubble {
        animation: float 12s linear infinite;
    }

    @keyframes moveback {
        0% {
            transform: translate(0, 0px);
        }
        100% {
            transform: translate(-50px, 40px);
        }
    }

    @keyframes movetop {
        0% {
            transform: translate(0, 0px);
        }
        100% {
            transform: translate(0, -50px);
        }
    }

    @keyframes float {
        0% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(-20deg);
        }
        100% {
            transform: rotate(0);
        }
    }

    .bubble {
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: -10%;
        opacity: 0;
        display: none;
        /* transition: opacity 0.3s ease-in-out; */
    }

    .portrait {
        position: absolute;
        z-index: 3;
        bottom: 0;
        opacity: 0;
        display: none;
        /* transition: opacity 0.3s ease-in-out; */
    }

    .portrait img,
    .bubble img {
        width: 100%;
        height: 100%;
    }

    .is-show {
        display: block;
    }

    @media screen and (max-width: 640px) {
        .question-text {
            font-size: 30px;
        }
    }
`

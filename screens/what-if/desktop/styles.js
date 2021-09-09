import css from 'styled-jsx/css'
import theme from '../../../components/global-styles/theme'

export default css`
    .content {
        background-color: ${theme.colors['vida-brokenwhite']};
    }

    .question-container {
        position: relative;
        width: 100%;
        height: 2000px;
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
    }

    .question-text > span {
        display: block;
        text-align: right;
    }

    .is-show {
        opacity: 1;
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
        /* transition: opacity 0.3s ease-in-out; */
    }

    .portrait {
        position: absolute;
        z-index: 3;
        bottom: 0;
        opacity: 0;
        /* transition: opacity 0.3s ease-in-out; */
    }

    .portrait img,
    .bubble img {
        width: 100%;
        height: 100%;
    }

    .bottom-section {
        height: 579px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 32px;
    }

    .bottom-gradient {
        background: linear-gradient(180deg, #f6f4f1 0%, #9c9c9c 197.41%);
    }

    @media screen and (max-width: 640px) {
        .question-text {
            font-size: 30px;
        }
    }
`

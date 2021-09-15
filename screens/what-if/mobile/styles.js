import css from 'styled-jsx/css'
import theme from 'components/global-styles/theme'

export default css`
    .content {
        background-color: ${theme.colors['vida-brokenwhite']};
    }

    .question-container {
        position: relative;
        /* width: 100%; */
        height: 2000px;
    }

    .question-text {
        position: absolute;
        bottom: 0;
        color: ${theme.colors['vida-black']};
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 30px;
        line-height: 1.17;
        z-index: 10;
        text-align: center;
        transition: all 0.1s linear;
        opacity: 0;
        width: 100%;
        padding: 0 10px;
        z-index: 3;
        display: none;
    }

    .question-text > span {
        display: block;
        text-align: center;
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

    @keyframes movetop {
        0% {
            transform: translate(0, 0px);
        }
        100% {
            transform: translate(0, -30px);
        }
    }

    @keyframes moveback {
        0% {
            transform: translate(0, 0px);
        }
        100% {
            transform: translate(-30px, 20px);
        }
    }

    @keyframes movebackIpad {
        0% {
            transform: translate(0, 0px);
        }
        100% {
            transform: translate(-50px, 40px);
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
        opacity: 0;
        display: none;
    }

    .portrait {
        position: absolute;
        z-index: 3;
        bottom: 0;
        opacity: 0;
        width: auto;
        display: none;
    }

    .portrait img,
    .bubble img {
        width: 100%;
        height: 100%;
    }

    .is-show {
        display: block;
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

    @media screen and (min-width: 640px) {
        .question-text {
            font-size: 48px;
        }

        .animate-portrait {
            animation: movebackIpad 8s ease-in forwards;
        }
    }
`

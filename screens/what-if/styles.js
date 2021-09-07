import css from 'styled-jsx/css'
import theme from '../../components/global-styles/theme'

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
        /* top: 50%; */
        bottom: 0;
        right: 8%;
        text-align: right;
        /* transform: translate(0, -60px); */
        color: ${theme.colors['vida-black']};
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 48px;
        line-height: 1.17;
        z-index: 10;
        text-align: center;
        transition: all 0.1s linear;
        opacity: 0;
        max-width: 600px;
        /* animation: floatmove 4s ease-in-out; */
    }

    .question-text > span {
        display: block;
        text-align: right;
    }

    #q1 {
        position: absolute;
        z-index: 2;
        opacity: 1;
        /* animation: 1.5s fadeIn; */
    }

    .question-show {
        /* animation: 0.4s slideUp; */
        /* transition: opacity 0.3s ease-in-out; */
        opacity: 1;
    }

    .animate-text {
        animation: movetop 8s ease-in forwards;
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

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
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
        left: -20%;
        opacity: 0;
        /* transition: opacity 0.3s ease-in-out; */
    }

    #bubble1 {
        opacity: 1;
    }

    .portrait {
        position: absolute;
        z-index: 3;
        bottom: 0;
        opacity: 0;
        /* transition: opacity 0.3s ease-in-out; */
    }

    #portrait1 {
        opacity: 1;
    }

    .q-container {
        position: absolute;
        width: 100%;
        display: none;
    }

    #q1-container,
    #q2-container {
        display: block;
    }

    .q-img {
        transition: all 0.1s linear;
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

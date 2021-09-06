import css from 'styled-jsx/css'
import theme from '../../components/global-styles/theme'

export default css`
    .content {
        position: relative;
        width: 100%;
        height: 2000px;
        background-color: ${theme.colors['vida-brokenwhite']};
    }
    .question-container {
        display: block;
        height: calc(100vh - 140px);
        position: relative;
    }

    .question-text {
        position: absolute;
        /* top: 50%; */
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -80px);
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

    #q1 {
        position: absolute;
        z-index: 2;
        opacity: 1;
        /* animation: 1.5s fadeIn; */
    }

    .question-show {
        /* animation: 0.4s slideUp; */
        opacity: 1;
    }

    @keyframes floatmove {
        0% {
            transform: translate(-50%, 0px);
        }
        100% {
            transform: translate(-50%, -50px);
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
            transform: rotate(16.48deg);
        }
        100% {
            transform: rotate(0);
        }
    }

    .bubble {
        animation: float 20s ease-in-out infinite;
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

    #bubble1 {
        position: absolute;
        z-index: 1;
        /* right: 25%; */
        top: 100px;
    }

    .q-img {
        transition: all 0.1s linear;
    }

    @media screen and (max-width: 640px) {
        .question-text {
            font-size: 30px;
        }
    }
`

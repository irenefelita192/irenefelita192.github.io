import css from 'styled-jsx/css'
import theme from 'components/global-styles/theme'

export default css`
    .content {
        min-height: 400px;
    }

    .question-container {
        /* display: none; */
        width: 100%;
        padding: 150px 15%;
        perspective: 1800px;
    }

    .question-container.is-loaded {
        position: relative;
        display: block;
    }

    .question-group {
        min-height: 500px;
        padding: 0;
        display: flex;
        flex-direction: column;
        position: relative;
        transform-style: preserve-3d;
        margin-top: -180px;
    }

    .question-group:first-child {
        margin-top: 0;
    }

    .item-odd {
        flex-direction: row-reverse;
    }

    .question-text {
        /* position: absolute;
        bottom: 0;
        right: 8%; */
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

    .question-bubble {
        position: absolute;
        height: 250px;
        width: auto;
        z-index: 4;
        top: 0;
        opacity: 0;
    }

    .bubble {
        /* position: absolute; */
        z-index: 2;
        bottom: 0;
        left: -10%;
        /* opacity: 0; */
        /* display: none; */
        /* transition: opacity 0.3s ease-in-out; */
    }

    .portrait {
        position: absolute;
        height: 400px;
        width: auto;
        z-index: 3;
        top: 100px;
        opacity: 0;
        /* display: none; */
        /* transition: opacity 0.3s ease-in-out; */
    }

    .portrait img,
    .bubble img,
    .question-bubble img {
        width: auto;
        height: 100%;
    }

    .is-show {
        display: block;
    }

    .question-group.is-visible .portrait,
    .question-group.is-visible .question-bubble {
        opacity: 1;
    }

    .question-group.animate-fadein .portrait img {
        opacity: 1;
        /* transform: translate(50px, -50px); */
        /* animation: fadein 1s ease-in forwards,
            moveright 1s cubic-bezier(0, 0.64, 0.17, 0.74) forwards,
            3s floatrotate 1s ease-in-out infinite; */
        animation: fadein 1s ease-in forwards,
            moveright 1s cubic-bezier(0, 0.64, 0.17, 0.74) forwards;
    }

    .question-group.animate-fadein .question-bubble {
        opacity: 1;
        /* transform: translate(50px, -50px); */
        /* animation: fadein 1s ease-in forwards, 10s float 1s ease-in infinite; */
        animation: fadein 1s ease-in forwards;
    }

    .question-group.item-odd.animate-fadein .portrait img {
        opacity: 1;
        /* transform: translate(50px, -50px); */
        animation: fadein 1s ease-in forwards,
            moveleft 1s cubic-bezier(0, 0.64, 0.17, 0.74) forwards;
    }

    .question-group.animate-fadeout .portrait {
        opacity: 0;
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @keyframes moveright {
        0% {
            transform: translate(-200px, 100px);
        }
        100% {
            transform: translate(0, 0);
            /* transform: translate(50px, -50px); */
        }
    }

    @keyframes moveleft {
        from {
            transform: translate(100px, 50px);
        }
        to {
            transform: translate(0, 0);
            /* transform: translate(50px, -50px); */
        }
    }

    @keyframes floatrotate {
        0% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(-1deg);
        }
        100% {
            transform: rotate(0);
        }
    }

    @keyframes float {
        0% {
            /* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
            transform: translatey(0px);
        }
        50% {
            /* box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2); */
            transform: translatey(-20px);
        }
        100% {
            /* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
            transform: translatey(0px);
        }
    }

    @media screen and (max-width: 640px) {
        .question-text {
            font-size: 30px;
        }
    }
`

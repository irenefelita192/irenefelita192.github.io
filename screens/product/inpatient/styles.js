import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    /* Hero Header - start */
    .hero-wrapper {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        min-height: 480px;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 20%;
    }

    .hero-title {
        font-family: 'Bree Serif', serif;
        font-size: 48px;
        line-height: 1.12;
    }

    .hero-desc {
        font-weight: 500;
        font-size: 16px;
        line-height: 1.37;
        padding-top: 20px;
        max-width: 530px;
        text-align: center;
    }

    /* Hero Header - end */

    .stats-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 90px;
    }

    .stats-header {
        padding-top: 16px;
        font-size: 22px;
        line-height: 1.27;
        color: #3f3f3f;
    }

    .stats-title {
        font-family: 'Bree Serif', serif;
        padding-top: 8px;
        max-width: 560px;
        font-size: 36px;
        line-height: 1.17;
        text-align: center;
        color: #000000;
    }

    .stats-note {
        font-size: 14px;
    }

    .stats-desc {
        padding-top: 26px;
        max-width: 480px;
        font-size: 22px;
        line-height: 1.27;
        text-align: center;
        color: #3f3f3f;
    }
    /* Counter - Start */
    .counter {
        font-family: 'Bree Serif', serif;
        font-size: 72px;
        line-height: 1.08;
        text-align: center;
        color: #000000;
        display: inline-block;
        box-sizing: border-box;
        overflow: hidden;
        color: black;
        text-align: center;
        padding-top: 16px;
    }

    .counter-content {
        position: relative;
        box-sizing: border-box;
        margin: 0;
        overflow: hidden;
        text-align: center;
        background: transparent;
    }

    .counter-item {
        position: relative;
        float: left;
    }

    .counter-item-digit.counter-item--0:before {
        content: '0\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0\A 1\A 2';
    }
    .counter-item-digit.counter-item--1:before {
        content: '0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0\A 1\A 2\A 3';
    }
    .counter-item-digit.counter-item--2:before {
        content: '0\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0\A 1\A 2\A 3\A 4';
    }
    .counter-item-digit.counter-item--3:before {
        content: '0\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0\A 1\A 2\A 3\A 4\A 5';
    }
    .counter-item-digit.counter-item--4:before {
        content: '0\A 4\A 5\A 6\A 7\A 8\A 9\A 0\A 1\A 2\A 3\A 4\A 5\A 6';
    }
    .counter-item-digit.counter-item--5:before {
        content: '0\A 5\A 6\A 7\A 8\A 9\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7';
    }
    .counter-item-digit.counter-item--6:before {
        content: '0\A 6\A 7\A 8\A 9\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8';
    }
    .counter-item-digit.counter-item--7:before {
        content: '0\A 7\A 8\A 9\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9';
    }
    .counter-item-digit.counter-item--8:before {
        content: '0\A 8\A 9\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0';
    }
    .counter-item-digit.counter-item--9:before {
        content: '0\A 9\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0\A 1';
    }

    .counter-content-digit {
        margin: 0 !important;
        float: left;
        line-height: 1;
        list-style: none !important;
    }

    .counter-item-digit {
        position: relative;
        overflow: hidden;
        color: transparent;
    }

    .counter-item-digit:before {
        position: absolute;
        top: 0;
        /* padding: 0 0.125em; */
        padding: 0;
        color: black;
        white-space: pre;
        transition: top 2s ease-in-out;
        transform: translateY(0);
    }

    .counter-item-digit {
        display: block;
        width: 40px;
        height: 1em;
    }

    .counter-item-digit:before {
        left: 0;
    }

    .counter-content-digit:nth-child(1) .counter-item-digit:before {
        animation-delay: 0.3s;
    }

    .counter-content-digit:nth-child(2) .counter-item-digit:before {
        animation-delay: 0.5s;
    }

    .counter-content-digit:nth-child(3) .counter-item-digit:before {
        animation-delay: 0.7s;
    }

    .counter-content-digit:nth-child(4) .counter-item-digit:before {
        animation-delay: 0.9s;
    }

    .counter-content-digit:nth-child(5) .counter-item-digit:before {
        animation-delay: 1.1s;
    }

    .counter-content-digit:nth-child(6) .counter-item-digit:before {
        animation-delay: 1.3s;
    }

    .counter-content-digit:nth-child(7) .counter-item-digit:before {
        animation-delay: 1.5s;
    }

    .counter-content-digit:nth-child(8) .counter-item-digit:before {
        animation-delay: 1.7s;
    }

    .counter-content-digit:nth-child(9) .counter-item-digit:before {
        animation-delay: 1.9s;
    }

    .counter-content-digit:nth-child(10) .counter-item-digit:before {
        animation-delay: 2.1s;
    }

    .counter-content-digit:nth-child(11) .counter-item-digit:before {
        animation-delay: 2.3s;
    }

    .counter-content-digit:nth-child(12) .counter-item-digit:before {
        animation-delay: 2.5s;
    }

    .counter-content-digit:nth-child(13) .counter-item-digit:before {
        animation-delay: 2.7s;
    }

    .counter-item-digit:before {
        animation: cou-bounce 1s forwards;
    }

    .counter-item--commapoint {
        padding: 0;
    }

    /*------------------------------------*\
        #ANIMATION
    \*------------------------------------*/

    @keyframes cou-bounce {
        0% {
            transform: translateY(0);
        }
        35% {
            transform: translateY(-11.25em);
        }
        65% {
            transform: translateY(-10.9em);
        }
        90% {
            transform: translateY(-11.08em);
        }
        100% {
            transform: translateY(-11em);
        }
    }
    /* Counter - End */

    /* Question - Start */
    .content-opening {
        font-size: 22px;
        line-height: 1.27;
        text-align: center;
        color: #3f3f3f;
    }

    .content-opening-2 {
        font-family: 'Bree Serif', serif;
        font-size: 36px;
        line-height: 1.17;
        text-align: center;
        color: #000000;
    }

    .question-wrapper {
        padding-top: 50px;
        position: relative;
    }

    /* Question - End */
`

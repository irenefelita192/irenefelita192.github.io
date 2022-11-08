import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'
import { constant } from './constant'

export default css`
    /* Hero Header - start */
    .hero-wrapper {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom right;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 20%;
        background-color: #00d1c5;
        position: relative;
    }

    .hero-image {
        position: absolute;
        bottom: 0;
        right: 0;
        max-width: 70%;
    }

    .hero-icon {
        position: absolute;
        transform: translate(0, 0);
        top: 5%;
        left: -14%;
        width: ${constant.iconWidth}px;
        height: ${constant.iconHeight}px;
        transition: transform 0.1s linear;
        opacity: 0;
        z-index: 5;
        will-change: transform;
        /* transform-style: flat; */
    }

    .hero-icon > div {
        transform-origin: center;
        transition: transform 0.3s ease-in;
        will-change: transform;
        text-align: left;
    }

    .hero-icon--inpatient.animate {
        animation: popout-inpatient 0.5s ease-in forwards;
    }

    .hero-icon--inpatient > div {
        left: 0;
        top: 0;
        position: absolute;
        animation: float 10s linear infinite;
    }

    .hero-icon--inpatient.revolve > div {
        animation: 80s revolve-ip 0.5s linear infinite;
    }

    .hero-icon--inpatient.revolve {
        animation: 80s zIndex-ip 0.5s linear infinite;
    }

    .hero-icon--inpatient.revolve img {
        animation: float 10s linear infinite;
    }

    /*maternity*/
    .hero-icon--maternity.animate {
        animation: popout-maternity 0.5s ease-in forwards;
    }

    .hero-icon--maternity > div {
        right: ${constant.mRight}%;
        top: ${constant.mTop}%;
        position: absolute;
        text-align: right;
        animation: float-maternity 10s linear infinite;
    }

    .hero-icon--maternity.revolve > div {
        animation: 80s revolve-maternity 0.5s linear infinite;
    }

    .hero-icon--maternity.revolve {
        animation: 80s zIndex-maternity 0.5s linear infinite;
        /* animation: 80s revolve-maternity 0.5s linear infinite; */
    }

    .hero-icon--maternity.revolve img {
        animation: float-maternity 10s linear infinite;
    }

    /* outpatient */
    .hero-icon--outpatient.animate {
        animation: popout-outpatient 0.5s ease-in forwards;
    }

    .hero-icon--outpatient > div {
        right: ${constant.opRight}%;
        top: ${constant.opTop}%;
        position: absolute;
        text-align: right;
        animation: float-outpatient 10s linear infinite;
    }

    .hero-icon--outpatient.revolve > div {
        animation: 80s revolve-op 0.5s linear infinite;
    }

    .hero-icon--outpatient.revolve {
        animation: 80s zIndex-op 1s linear infinite;
    }

    .hero-icon--outpatient.revolve img {
        animation: float-outpatient 10s linear infinite;
    }

    /* hemat */
    .hero-icon--hemat.animate {
        animation: popout-hemat 0.5s ease-in forwards;
    }

    .hero-icon--hemat > div {
        right: ${constant.hRight}%;
        top: ${constant.hTop}%;
        position: absolute;
        text-align: right;
        animation: float-hemat 10s linear infinite;
    }

    .hero-icon--hemat.revolve > div {
        animation: 80s revolve-hemat 1s linear infinite;
    }

    .hero-icon--hemat.revolve {
        animation: 80s zIndex-hemat 1s linear infinite;
        /* animation: 80s revolve-maternity 0.5s linear infinite; */
    }

    .hero-icon--hemat.revolve img {
        animation: float-hemat 10s linear infinite;
    }

    /* dental */
    .hero-icon--dental.animate {
        animation: popout-dental 0.5s ease-in forwards;
    }

    .hero-icon--dental > div {
        left: ${constant.dLeft}%;
        top: ${constant.dTop}%;
        position: absolute;
        animation: float-dental 10s linear infinite;
    }

    .hero-icon--dental.revolve > div {
        animation: 80s revolve-dental 1s linear infinite;
    }

    .hero-icon--dental.revolve {
        animation: 80s zIndex-dental 1s linear infinite;
        /* animation: 80s revolve-maternity 0.5s linear infinite; */
    }

    .hero-icon--dental.revolve img {
        animation: float-dental 10s linear infinite;
    }

    .hero-icon--inpatient,
    .hero-icon--outpatient,
    .hero-icon--maternity,
    .hero-icon--dental,
    .hero-icon--hemat {
        opacity: 1;
    }

    @keyframes popout-inpatient {
        0% {
            opacity: 0.2;
            transform: translate(-5%, -5%) scale(0.3);
        }
        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes popout-maternity {
        0% {
            opacity: 0.2;
            transform: translate(0, 0) scale(0.3);
        }

        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes popout-outpatient {
        0% {
            opacity: 0.2;
            transform: translate(0, 5%) scale(0.3);
        }

        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes popout-hemat {
        0% {
            opacity: 0.2;
            transform: translate(0, 5%) scale(0.3);
        }

        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes popout-dental {
        0% {
            opacity: 0.2;
            transform: translate(-5%, 0) scale(0.3);
        }

        100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
    }

    @keyframes float {
        0% {
            transform-origin: left;
            transform: translate(0, 0) scale(1) rotate(0);
        }
        30% {
            transform-origin: left;
            transform: translate(0, 0) scale(0.85) rotate(10deg);
        }
        70% {
            transform-origin: left;
            transform: translate(5px, -5px) scale(0.95) rotate(10deg);
        }
        100% {
            transform-origin: left;
            transform: translate(0, 0) scale(1) rotate(0);
        }
    }

    @keyframes float-maternity {
        0% {
            transform-origin: right;
            transform: translate(0, 0) scale(1) rotate(0);
        }
        30% {
            transform-origin: right;
            transform: translate(20px, -20px) scale(1) rotate(-15deg);
        }
        60% {
            transform-origin: right;
            transform: translate(5px, -10px) scale(1.15) rotate(-10deg);
        }
        100% {
            transform-origin: right;
            transform: translate(0, 0) scale(1) rotate(0);
        }
    }

    @keyframes float-dental {
        0% {
            transform-origin: left;
            transform: translate(0, 0) scale(1) rotate(0);
        }
        20% {
            transform-origin: left;
            transform: translate(15px, -10px) scale(0.8) rotate(-10deg);
        }
        85% {
            transform-origin: left;
            transform: translate(5px, 0) scale(0.9) rotate(-6deg);
        }
        100% {
            transform-origin: left;
            transform: translate(0, 0) scale(1) rotate(0);
        }
    }

    @keyframes float-outpatient {
        0% {
            transform-origin: right;
            transform: translate(0, 0) scale(1) rotate(0);
        }
        50% {
            transform-origin: right;
            transform: translate(0, -5px) scale(1.15) rotate(15deg);
        }
        70% {
            transform-origin: right;
            transform: translate(10px, -15px) scale(1.08) rotate(5deg);
        }
        100% {
            transform-origin: right;
            transform: translate(0, 0) scale(1) rotate(0);
        }
    }

    @keyframes float-hemat {
        0% {
            transform-origin: right;
            transform: translate(0, 0) scale(1) rotate(0);
        }
        50% {
            transform-origin: right;
            transform: translate(0, 5px) scale(0.85) rotate(15deg);
        }
        70% {
            transform-origin: right;
            transform: translate(-10px, 15px) scale(0.95) rotate(5deg);
        }
        100% {
            transform-origin: right;
            transform: translate(0, 0) scale(1) rotate(0);
        }
    }

    .hero-icon img {
        width: 100%;
        height: auto;
    }

    .hero-text {
        position: absolute;
        top: 12%;
        z-index: 6;
    }

    .hero-title h1 {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 55px;
        line-height: 1.1;
        color: #fcfcfc;
        max-width: 56%;
        margin: 0 auto;
        padding: 0;
    }

    .hero-desc {
        font-size: 18px;
        line-height: 1.4;
        margin-top: 10px;
        text-align: center;
    }

    .hero-button-text {
        font-weight: 600;
        font-size: 18px;
        line-height: 1;
        padding: 40px 0 12px;
    }

    .hero-button {
        display: flex;
    }

    .hero-button a {
        font-family: 'Bree Serif', serif;
        font-size: 14px;
        line-height: 1.43;
        padding: 13px 28px;
        background-color: #ffffff;
        border: 1px solid #cecece;
        box-sizing: border-box;
        border-radius: 16px;
        color: ${theme.colors['vida-black']};
        margin-right: 12px;
        transition: all 0.2s ease-in-out;
    }

    .hero-button a:hover {
        background: #00a59b;
        border: 1px solid #21837d;
        color: ${theme.colors['vida-brokenwhite']};
    }

    .hero-button a:last-child {
        margin-right: 0;
    }
    /* Hero Header - end */

    /* Second Section - start */
    .second-title-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        background-color: #f4f1ee;
    }

    .second-wrapper {
        display: block;
        position: relative;
        padding: 0;
        line-height: 0;
        background-color: #f4f1ee;
    }

    .second-text {
        position: absolute;
        top: 10%;
        z-index: 8;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .second-bg {
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
    }

    .overlay-wrapper {
        top: 0;
        /* transform: translate(0, -102%) rotateX(20deg);
        transform-style: preserve-3d; */
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .overlay-image {
        opacity: 0;
        position: absolute;
        width: 28.5%;
        z-index: 3;
        bottom: 37px;
        left: 54%;
        transform: translateX(-54%);
        height: auto;
    }

    @keyframes revolve-ip {
        0% {
            transform: translate(0, 0);
            z-index: 4;
        }

        20% {
            transform: translate(-11%, 94%);
            z-index: 4;
        }

        40% {
            transform: translate(47%, 104%);
            z-index: 4;
        }

        60% {
            transform: translate(80%, 45%);
            z-index: 4;
        }

        80% {
            transform: translate(69%, -22%);
            z-index: 2;
        }

        100% {
            transform: translate(0, 0);
            z-index: 2;
        }
    }

    @keyframes zIndex-ip {
        0% {
            z-index: 4;
        }
        20% {
            z-index: 4;
        }

        40% {
            z-index: 4;
        }

        60% {
            z-index: 4;
        }

        80% {
            z-index: 2;
        }

        100% {
            z-index: 2;
        }
    }

    @keyframes revolve-maternity {
        0% {
            transform: translate(0, 0);
            z-index: 2;
        }
        20% {
            transform: translate(-79%, 15%);
            z-index: 4;
        }

        40% {
            transform: translate(-80%, 111%);
            z-index: 4;
        }

        60% {
            transform: translate(-24%, 120%);
            z-index: 4;
        }

        80% {
            transform: translate(15%, 63%);
            z-index: 4;
        }

        100% {
            transform: translate(0, 0);
            z-index: 2;
        }
    }

    @keyframes zIndex-maternity {
        0% {
            z-index: 2;
        }
        20% {
            z-index: 4;
        }

        40% {
            z-index: 4;
        }

        60% {
            z-index: 4;
        }

        80% {
            z-index: 4;
        }

        100% {
            z-index: 2;
        }
    }

    @keyframes revolve-op {
        0% {
            transform: translate(0, 0);
            z-index: 2;
        }

        20% {
            transform: translate(-5%, -76%);
            z-index: 2;
        }

        40% {
            transform: translate(-70%, -60%);
            z-index: 2;
        }

        60% {
            transform: translate(-85%, 38%);
            z-index: 4;
        }

        80% {
            transform: translate(-21%, 48%);
            z-index: 4;
        }

        100% {
            transform: translate(0, 0);
            z-index: 4;
        }
    }

    @keyframes zIndex-op {
        0% {
            z-index: 2;
        }

        20% {
            z-index: 2;
        }

        40% {
            z-index: 2;
        }

        60% {
            z-index: 4;
        }

        80% {
            z-index: 4;
        }

        100% {
            z-index: 4;
        }
    }

    @keyframes revolve-hemat {
        0% {
            transform: translate(0, 0);
            z-index: 4;
        }

        20% {
            transform: translate(35%, -55%);
            z-index: 4;
        }

        40% {
            transform: translate(22%, -120%);
            z-index: 2;
        }

        60% {
            transform: translate(-45%, -105%);
            z-index: 2;
        }

        80% {
            transform: translate(-57%, -9%);
            z-index: 4;
        }

        100% {
            transform: translate(0, 0);
            z-index: 4;
        }
    }

    @keyframes zIndex-hemat {
        0% {
            z-index: 4;
        }

        20% {
            z-index: 4;
        }

        40% {
            z-index: 2;
        }

        60% {
            z-index: 2;
        }

        80% {
            z-index: 4;
        }

        100% {
            z-index: 4;
        }
    }

    @keyframes revolve-dental {
        0% {
            transform: translate(0, 0);
            z-index: 4;
        }
        25% {
            transform: translate(85%, -5%);
            z-index: 4;
        }

        50% {
            transform: translate(88%, -90%);
            z-index: 2;
        }

        75% {
            transform: translate(5%, -85%);
            z-index: 2;
        }

        100% {
            transform: translate(0, 0);
            z-index: 4;
        }
    }

    @keyframes zIndex-dental {
        0% {
            z-index: 4;
        }
        25% {
            z-index: 4;
        }

        50% {
            z-index: 2;
        }

        75% {
            z-index: 2;
        }

        100% {
            z-index: 4;
        }
    }

    .second-title {
        max-width: 544px;
    }

    .second-title h2 {
        font-family: 'Museo', sans-serif;
        font-weight: 700;
        font-size: 44px;
        line-height: 1.1;
        text-align: center;
        color: #303030;
    }

    .second-desc {
        max-width: 824px;
        padding: 10px;
        font-weight: normal;
        font-size: 18px;
        line-height: 1.4;
        text-align: center;
        color: #7b7b7b;
    }

    /* Second Section - end */

    @media screen and (max-width: 1280px) {
        .hero-text {
            top: 14%;
        }

        .hero-title h1 {
            font-size: 36px;
            max-width: 70%;
        }

        .hero-desc {
            font-size: 15px;
        }

        .hero-image {
            max-width: 68%;
        }

        .second-text {
            top: 8%;
        }

        .second-title {
            max-width: 453px;
        }

        .second-desc {
            font-size: 15px;
            max-width: 687px;
        }

        .second-title h2 {
            font-size: 37px;
        }
    }

    @media screen and (max-width: 1024px) {
        .hero-text {
            top: 16%;
        }

        .hero-title h1 {
            font-size: 38px;
        }

        .hero-desc {
            font-size: 14px;
        }

        .second-title {
            max-width: 453px;
        }

        .second-desc {
            font-size: 14px;
            max-width: 687px;
        }

        .second-title h2 {
            font-size: 34px;
        }
    }

    /*handphone landscape - start*/
    @media screen and (max-width: 930px) {
        .hero-text {
            top: 12%;
        }

        .hero-title h1 {
            font-size: 32px;
            max-width: 70%;
            margin: 0 auto;
        }

        .hero-desc {
            font-size: 15px;
            margin-top: 4px;
        }

        .hero-image {
            max-width: 65%;
        }

        .second-text {
            top: 8%;
            width: 60%;
        }

        .second-title {
            max-width: 100%;
        }

        .second-desc {
            font-size: 10px;
            max-width: 100%;
        }

        .second-title h2 {
            font-size: 28px;
        }

        .overlay-image {
            bottom: 16px;
        }
    }

    @media screen and (max-width: 812px) {
        .hero-text {
            top: 14%;
        }

        .hero-title h1 {
            font-size: 30px;
            max-width: 70%;
            margin: 0 auto;
        }

        .hero-desc {
            font-size: 13px;
        }

        .hero-image {
            max-width: 65%;
        }

        .second-text {
            top: 8%;
            width: 80%;
        }

        .second-title {
            max-width: 100%;
        }

        .second-desc {
            font-size: 10px;
            max-width: 100%;
        }

        .second-title h2 {
            font-size: 20px;
        }

        .overlay-image {
            bottom: 16px;
        }
    }

    @media screen and (min-width: 1024px) {
        .hero-wrapper {
            min-height: 600px;
        }
    }
`

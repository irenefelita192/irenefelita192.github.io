import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css.global`
    .wrapper li ol {
        padding-bottom: 30px;
    }

    .wrapper ol ol ol ol {
        padding-bottom: 0;
    }

    .wrapper a {
        color: #00a59b;
    }

    .wrapper > ol {
        counter-reset: list-upper-alpha;
        padding: 10px 0 0 10px;
        list-style-type: none;
    }

    .wrapper > ol > li {
        padding-left: 0;
        padding-top: 5px;
    }

    .wrapper > ol > li:before {
        content: counter(list-upper-alpha, upper-alpha) '. ';
        counter-increment: list-upper-alpha;
        white-space: pre-wrap;
        font-weight: 600;
    }

    .wrapper > ol > li > ol {
        counter-reset: list-decimal;
        padding-left: 18px;
        list-style-type: none;
    }

    .wrapper > ol > li > ol > li {
        padding-left: 20px;
        padding-top: 5px;
        position: relative;
    }

    .wrapper > ol > li > ol > li:before {
        content: counter(list-decimal, decimal) '. ';
        counter-increment: list-decimal;
        white-space: pre-wrap;
        position: absolute;
        left: 0;
    }

    .wrapper > ol > li > ol > li > ol {
        counter-reset: list-lower-alpha;
        padding-left: 0;
        list-style-type: none;
    }

    .wrapper > ol > li > ol > li > ol > li {
        padding-left: 20px;
        padding-top: 5px;
        position: relative;
    }

    .wrapper > ol > li > ol > li > ol > li:before {
        content: counter(list-lower-alpha, lower-alpha) '. ';
        counter-increment: list-lower-alpha;
        white-space: pre-wrap;
        position: absolute;
        left: 0;
    }

    .wrapper > ol > li > ol > li > ol > li > ol {
        counter-reset: list-decimal;
        padding-left: 0;
        list-style-type: none;
    }

    .wrapper > ol > li > ol > li > ol > li > ol > li {
        padding-left: 20px;
        padding-top: 5px;
        position: relative;
    }

    .wrapper > ol > li > ol > li > ol > li > ol > li:before {
        content: counter(list-decimal, decimal) ') ';
        counter-increment: list-decimal;
        white-space: pre-wrap;
        position: absolute;
        left: 0;
    }

    .wrapper > ol > li > ol > li > ol > li > ol > li > ol {
        counter-reset: list-alpha;
        padding-left: 0;
        list-style-type: none;
    }

    .wrapper > ol > li > ol > li > ol > li > ol > li > ol > li {
        padding-left: 20px;
        padding-top: 5px;
        position: relative;
    }

    .wrapper > ol > li > ol > li > ol > li > ol > li > ol > li:before {
        content: counter(list-alpha, lower-alpha) ') ';
        counter-increment: list-alpha;
        white-space: pre-wrap;
        position: absolute;
        left: 0;
    }
`

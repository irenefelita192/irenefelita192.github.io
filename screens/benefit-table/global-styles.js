import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css.global`
    body {
        // background-color: #f6f4f1;
    }
    section {
        line-height: 1;
    }

    strong {
        color: black;
    }

    p {
        line-height: 1.4;
    }

    a {
        color: ${theme.colors['vida-green']};
    }

    h2,
    h3 {
        font-size: 22px;
        line-height: 1.2;
        font-weight: 500;
        color: ${theme.colors['vida-green']};
        margin: 20px 0;
    }

    h3 {
        font-size: 16px;
        font-weight: 600;
        color: #000000;
        margin-bottom: 10px;
    }

    table {
        width: 100%;
        height: 100%;
        border-collapse: collapse;
    }

    table,
    th,
    td {
        border: 1px solid black;
    }

    td:last-child {
        width: 100%;
    }

    th,
    td {
        padding: 5px;
        line-height: 1.2;
    }

    tbody th {
        width: 40%;
    }

    th {
        font-weight: bold;
        text-align: left;
    }

    thead td {
        font-weight: bold;
        font-size: 16px;
    }

    tr > td:first-child {
        width: 50%;
        vertical-align: text-top;
    }

    .table-full th {
        width: 20%;
    }

    .table-nested tbody th {
        text-align: left;
        // font-size: 20px;
    }

    .table-nested tbody td {
        font-size: 12px;
    }

    .table-nested tbody th p,
    .table-nested tbody th li,
    .table-nested tbody th span {
        font-weight: normal;
    }

    .table-nested tr:last-child > td:last-child,
    .table-nested tr:last-child > th:last-child,
    .table-nested tr:last-child > td:first-child,
    .table-nested tr:last-child > th:first-child {
        border-radius: 0;
    }

    .table-nested td:last-child {
        border-right: 0;
        width: auto;
        vertical-align: middle;
    }

    .table-nested tbody tr > td {
        text-align: center;
    }

    .table-nested tbody tr > td:first-child {
        width: auto;
        text-align: left;
    }

    .table-nested thead {
        color: #ffffff;
        background-color: #0c5394;
    }

    .table-nested thead tr > td {
        text-align: center;
    }

    .table-nested th > ol {
        counter-reset: list-lower-alpha;
        padding-left: 0;
        list-style-type: none;
        *list-style-type: lower-alpha;
        /*Conditional hack for ie7*/
    }

    .table-nested th > ol > li:before {
        content: counter(list-lower-alpha, lower-alpha) ') ';
        counter-increment: list-lower-alpha;
        white-space: pre-wrap;
    }

    ul {
        list-style-position: outside;
        padding-left: 30px;
    }

    ul li,
    ol li {
        margin-bottom: 5px;
        line-height: 1.4;
    }

    ul.dash {
        list-style-type: none;
        padding: 10px;
    }

    ul.dash > li {
        position: relative;
    }

    ul.dash > li:before {
        content: '-';
        text-indent: -20px;
        position: absolute;
    }

    #conditions > ol {
        counter-reset: list-upper-alpha;
        padding-left: 25px;
        list-style-type: none;
        *list-style-type: upper-alpha;
        /*Conditional hack for ie7*/
    }

    #conditions > ol > li {
        padding-left: 0;
        padding-top: 5px;
    }

    #conditions > ol > li > p {
        padding-left: 18px;
    }

    #conditions > ol > li > h4 {
        font-weight: 600;
        padding: 20px 0 5px 18px;
    }

    #conditions > ol > li:before {
        content: counter(list-upper-alpha, upper-alpha) '. ';
        counter-increment: list-upper-alpha;
        white-space: pre-wrap;
        font-weight: 600;
    }

    #conditions > ol > li > ol {
        margin-left: 55px;
        margin-top: 5px;
        counter-reset: list-decimal;
        padding-left: 0;
        list-style-type: none;
        *list-style-type: decimal;
        /*Conditional hack for ie7*/
    }

    #conditions > ol > li > ol > li {
        position: relative;
    }

    #conditions > ol > li > ol > li:before {
        content: counter(list-decimal, decimal) '. ';
        counter-increment: list-decimal;
        white-space: pre-wrap;
        position: absolute;
        left: -25px;
    }

    .table-flex {
        display: -webkit-box;
    }

    .table-flex table {
        width: 24%;
        margin-right: 20px;
    }

    .table-flex table:last-child {
        margin-right: 0;
    }

    .table-flex th {
        height: 40px;
        text-align: center;
    }

    .table-justify th {
        width: 25%;
    }

    .table-definition,
    .table-definition td {
        border: 0;
    }

    .table-definition td:first-child {
        padding-left: 20px;
    }

    .list-upper-alpha {
        counter-reset: list-upper-alpha;
        padding-left: 25px;
        list-style-type: none;
        *list-style-type: upper-alpha;
        /*Conditional hack for ie7*/
    }

    .list-upper-alpha > li {
        line-height: 1.5;
        padding-top: 12px;
    }

    .list-upper-alpha > li:first-child {
        padding-top: 0;
    }

    .list-upper-alpha > li:before {
        content: counter(list-upper-alpha, upper-alpha) '. ';
        counter-increment: list-upper-alpha;
        white-space: pre-wrap;
        font-weight: 600;
    }

    @media screen and (max-width: 640px) {
        .table-fit-mobile thead td {
            width: 50%;
        }

        .table-flex table {
            width: 100%;
            margin-bottom: 20px;
            display: inline-block;
            border: 0;
        }
    }
`

import theme from '../global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .accordions {
        color: black;
        overflow: hidden;
    }
    .accordion {
        width: 100%;
        color: black;
        overflow: hidden;
    }

    .accordion-label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .accordion:hover {
        /* background: darken($midnight, 10%); */
    }

    .accordion-label:after {
        content: "\276F";
        width: 12px;
        height: auto;
        font-size: 12px;
        text-align: center;
        transition: all 0.4s ease-in-out;
    }

    .accordion-content {
        max-height: 0;
        color: black;
        transition:  max-height 0.4s ease-in-out;
    }

    .accordion-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        font-size: 0.75em;
        cursor: pointer;
    }

    .accordion-close:hover {
        /* background: darken($midnight, 10%); */
    }

    input.dummy-checkbox {
        position: absolute;
        opacity: 0;
        z-index: -1;
    }

    input.dummy-checkbox:checked + .accordion-label {
        /* background: darken($midnight, 10%); */
    }

    input.dummy-checkbox:checked + .accordion-label::after {
        transform: rotate(90deg);
    }

    input.dummy-checkbox:checked ~ .accordion-content {
        max-height: 100vh;
        transition:  max-height 0.4s ease-in-out;
    }
`

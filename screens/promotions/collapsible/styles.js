import css from 'styled-jsx/css'

export default css`

    .collapsible {
        overflow: hidden;
    }
  
    .collapsible-label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        color: #272727;
        font-family: 'Museo',sans-serif;
        font-weight: 700;
        font-size: 14px;
        padding: 10px 0;
    }

    .collapsible-label:after {
        content: "\276F";
        width: 12px;
        height: auto;
        font-size: 12px;
        text-align: center;
        transition: all 0.4s ease-in-out;
        transform: rotate(90deg);
    }

    .collapsible-content {
        max-height: 0;
        color: black;
        transition:  max-height 0.4s ease-in-out;
    }

    input.collapsible-dummy-checkbox {
        position: absolute;
        opacity: 0;
        z-index: -1;
    }

    input.collapsible-dummy-checkbox:checked + .collapsible-label::after {
        transform: rotate(90deg);
    }

    input.collapsible-dummy-checkbox:checked + .collapsible-label:after {
        transform: rotate(-90deg);
    }

    input.collapsible-dummy-checkbox:checked ~ .collapsible-content {
        max-height: 100vh;
        transition:  max-height 0.4s ease-in-out;
    }
`

import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .pagination-panel.is-mobile {
        width: 100%;
        height: 105px;
        overflow: hidden;
    }

    .pagination-panel.is-mobile :global(.pagination) {
        position: relative;
        justify-content: center;
    }

    .pagination-panel.is-mobile :global(.pagination > .page-item:first-child) {
        position: absolute;
        left: 0;
        top: 60px;
        width: calc(50% - 10px);
    }

    .pagination-panel.is-mobile :global(.pagination > .page-item:last-child) {
        position: absolute;
        right: 0;
        top: 60px;
        width: calc(50% - 10px);
    }
`
